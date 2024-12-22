/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as VoteImport } from './routes/vote'
import { Route as SignupImport } from './routes/signup'
import { Route as SessionImport } from './routes/session'
import { Route as ResultsImport } from './routes/results'
import { Route as EnterSessionImport } from './routes/enter-session'
import { Route as CreateSessionImport } from './routes/create-session'
import { Route as AuthImport } from './routes/_auth'
import { Route as IndexImport } from './routes/index'
import { Route as VoteRegisteredSessionImport } from './routes/vote-registered/$session'
import { Route as AuthMenuImport } from './routes/_auth/menu'

// Create/Update Routes

const VoteRoute = VoteImport.update({
  id: '/vote',
  path: '/vote',
  getParentRoute: () => rootRoute,
} as any)

const SignupRoute = SignupImport.update({
  id: '/signup',
  path: '/signup',
  getParentRoute: () => rootRoute,
} as any)

const SessionRoute = SessionImport.update({
  id: '/session',
  path: '/session',
  getParentRoute: () => rootRoute,
} as any)

const ResultsRoute = ResultsImport.update({
  id: '/results',
  path: '/results',
  getParentRoute: () => rootRoute,
} as any)

const EnterSessionRoute = EnterSessionImport.update({
  id: '/enter-session',
  path: '/enter-session',
  getParentRoute: () => rootRoute,
} as any)

const CreateSessionRoute = CreateSessionImport.update({
  id: '/create-session',
  path: '/create-session',
  getParentRoute: () => rootRoute,
} as any)

const AuthRoute = AuthImport.update({
  id: '/_auth',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const VoteRegisteredSessionRoute = VoteRegisteredSessionImport.update({
  id: '/vote-registered/$session',
  path: '/vote-registered/$session',
  getParentRoute: () => rootRoute,
} as any)

const AuthMenuRoute = AuthMenuImport.update({
  id: '/menu',
  path: '/menu',
  getParentRoute: () => AuthRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_auth': {
      id: '/_auth'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthImport
      parentRoute: typeof rootRoute
    }
    '/create-session': {
      id: '/create-session'
      path: '/create-session'
      fullPath: '/create-session'
      preLoaderRoute: typeof CreateSessionImport
      parentRoute: typeof rootRoute
    }
    '/enter-session': {
      id: '/enter-session'
      path: '/enter-session'
      fullPath: '/enter-session'
      preLoaderRoute: typeof EnterSessionImport
      parentRoute: typeof rootRoute
    }
    '/results': {
      id: '/results'
      path: '/results'
      fullPath: '/results'
      preLoaderRoute: typeof ResultsImport
      parentRoute: typeof rootRoute
    }
    '/session': {
      id: '/session'
      path: '/session'
      fullPath: '/session'
      preLoaderRoute: typeof SessionImport
      parentRoute: typeof rootRoute
    }
    '/signup': {
      id: '/signup'
      path: '/signup'
      fullPath: '/signup'
      preLoaderRoute: typeof SignupImport
      parentRoute: typeof rootRoute
    }
    '/vote': {
      id: '/vote'
      path: '/vote'
      fullPath: '/vote'
      preLoaderRoute: typeof VoteImport
      parentRoute: typeof rootRoute
    }
    '/_auth/menu': {
      id: '/_auth/menu'
      path: '/menu'
      fullPath: '/menu'
      preLoaderRoute: typeof AuthMenuImport
      parentRoute: typeof AuthImport
    }
    '/vote-registered/$session': {
      id: '/vote-registered/$session'
      path: '/vote-registered/$session'
      fullPath: '/vote-registered/$session'
      preLoaderRoute: typeof VoteRegisteredSessionImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

interface AuthRouteChildren {
  AuthMenuRoute: typeof AuthMenuRoute
}

const AuthRouteChildren: AuthRouteChildren = {
  AuthMenuRoute: AuthMenuRoute,
}

const AuthRouteWithChildren = AuthRoute._addFileChildren(AuthRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '': typeof AuthRouteWithChildren
  '/create-session': typeof CreateSessionRoute
  '/enter-session': typeof EnterSessionRoute
  '/results': typeof ResultsRoute
  '/session': typeof SessionRoute
  '/signup': typeof SignupRoute
  '/vote': typeof VoteRoute
  '/menu': typeof AuthMenuRoute
  '/vote-registered/$session': typeof VoteRegisteredSessionRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '': typeof AuthRouteWithChildren
  '/create-session': typeof CreateSessionRoute
  '/enter-session': typeof EnterSessionRoute
  '/results': typeof ResultsRoute
  '/session': typeof SessionRoute
  '/signup': typeof SignupRoute
  '/vote': typeof VoteRoute
  '/menu': typeof AuthMenuRoute
  '/vote-registered/$session': typeof VoteRegisteredSessionRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/_auth': typeof AuthRouteWithChildren
  '/create-session': typeof CreateSessionRoute
  '/enter-session': typeof EnterSessionRoute
  '/results': typeof ResultsRoute
  '/session': typeof SessionRoute
  '/signup': typeof SignupRoute
  '/vote': typeof VoteRoute
  '/_auth/menu': typeof AuthMenuRoute
  '/vote-registered/$session': typeof VoteRegisteredSessionRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | ''
    | '/create-session'
    | '/enter-session'
    | '/results'
    | '/session'
    | '/signup'
    | '/vote'
    | '/menu'
    | '/vote-registered/$session'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | ''
    | '/create-session'
    | '/enter-session'
    | '/results'
    | '/session'
    | '/signup'
    | '/vote'
    | '/menu'
    | '/vote-registered/$session'
  id:
    | '__root__'
    | '/'
    | '/_auth'
    | '/create-session'
    | '/enter-session'
    | '/results'
    | '/session'
    | '/signup'
    | '/vote'
    | '/_auth/menu'
    | '/vote-registered/$session'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AuthRoute: typeof AuthRouteWithChildren
  CreateSessionRoute: typeof CreateSessionRoute
  EnterSessionRoute: typeof EnterSessionRoute
  ResultsRoute: typeof ResultsRoute
  SessionRoute: typeof SessionRoute
  SignupRoute: typeof SignupRoute
  VoteRoute: typeof VoteRoute
  VoteRegisteredSessionRoute: typeof VoteRegisteredSessionRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AuthRoute: AuthRouteWithChildren,
  CreateSessionRoute: CreateSessionRoute,
  EnterSessionRoute: EnterSessionRoute,
  ResultsRoute: ResultsRoute,
  SessionRoute: SessionRoute,
  SignupRoute: SignupRoute,
  VoteRoute: VoteRoute,
  VoteRegisteredSessionRoute: VoteRegisteredSessionRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_auth",
        "/create-session",
        "/enter-session",
        "/results",
        "/session",
        "/signup",
        "/vote",
        "/vote-registered/$session"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_auth": {
      "filePath": "_auth.tsx",
      "children": [
        "/_auth/menu"
      ]
    },
    "/create-session": {
      "filePath": "create-session.tsx"
    },
    "/enter-session": {
      "filePath": "enter-session.tsx"
    },
    "/results": {
      "filePath": "results.tsx"
    },
    "/session": {
      "filePath": "session.tsx"
    },
    "/signup": {
      "filePath": "signup.tsx"
    },
    "/vote": {
      "filePath": "vote.tsx"
    },
    "/_auth/menu": {
      "filePath": "_auth/menu.tsx",
      "parent": "/_auth"
    },
    "/vote-registered/$session": {
      "filePath": "vote-registered/$session.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
