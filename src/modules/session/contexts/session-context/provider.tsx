import { useEffect, useState } from "react";
import { SessionContext } from "./context";
import { GameData, Session, SessionState } from "../../types/session";
import { tryCatch } from "@/utils/error";
import { sessionService } from "../../services/session";
import { addToastWithError } from "@/lib/toast";
import { useNavigate, useParams } from "@tanstack/react-router";
import { SocketUser } from ".";
import { Loader } from "@/components/Loader";
import { UpdateGameDataFn } from "./types";
import { gameDataService } from "../../services/game-data";
import { Category } from "@/types/categories";
import { User } from "@/modules/common/types/account";

export const SessionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [session, setSession] = useState<Session | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [participants, setParticipants] = useState<User[]>([]);
  const [gameData, setGameData] = useState<GameData | null>(null);
  const [connectedParticipants, setConnectedParticipants] = useState<string[]>([
    {
      id: "1",
      name: "Max",
    },
    {
      id: "2",
      name: "João",
    },
    {
      id: "3",
      name: "Edu",
    },
  ]);

  const params = useParams({
    from: "/_auth/session/$sessionId",
  });
  const navigate = useNavigate();

  const fetchSessionData = async () => {
    const session = await sessionService.getSession(params.sessionId);

    if (![SessionState.CREATED, SessionState.OPENED].includes(session.state)) {
      navigate({
        to: "/dashboard/home",
      });
      throw new Error("Sessão não está mais disponível");
    }

    const gameData = await sessionService.getSessionGameData(params.sessionId);
    const categories = await sessionService.getCategories(params.sessionId);
    const participants = await sessionService.getParticipants(params.sessionId);

    return { session, gameData, categories, participants };
  };

  const fetchSession = async () => {
    setIsLoading(true);
    const [error, data] = await tryCatch(fetchSessionData());

    if (error) {
      addToastWithError({
        title: "Erro ao buscar dados da sessão",
        error: error,
      });
      return;
    }

    const { categories, gameData, session, participants } = data;

    setSession(session);
    setGameData(gameData);
    setCategories(categories);
    setParticipants(participants);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchSession();
  }, []);

  const registerGameAction: UpdateGameDataFn = async (
    action,
    categoryId?: string
  ) => {
    if (!session) return;

    switch (action) {
      case "START_VOTING":
        if (!categoryId)
          throw new Error("CategoryId is required to start voting");

        await gameDataService.startVoting(session.id, categoryId);
        return;
      case "FINISH_VOTING":
        await gameDataService.finishVoting(session.id);

        return;
      default:
        throw new Error("Invalid action");
    }
  };

  return (
    <SessionContext.Provider
      value={{
        connectedParticipants,
        session,
        gameData,
        categories,
        registerGameAction,
        participants,
      }}
    >
      {isLoading ? (
        <div className="flex items-center gap-4">
          <Loader />
          <span>Carregando dados da sessão...</span>
        </div>
      ) : (
        children
      )}
    </SessionContext.Provider>
  );
};