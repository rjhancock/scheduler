//
//  UsersControllers.swift
//  Routes related to Users. Login, Creation, etc.
//
//  Created by Richard Hancock on 7/26/21.
//

import Vapor
import Fluent

struct UsersController: RouteCollection {
  func boot(routes: RoutesBuilder) throws {
    let usersRoutes = routes.grouped("users")
    usersRoutes.get(use: getAllHandler)
    usersRoutes.get(":id", use: getHandler)
    usersRoutes.post(use: createHandler)

    let basicAuthMiddleware = User.authenticator()
    let basicAuthGroup = usersRoutes.grouped(basicAuthMiddleware)
    basicAuthGroup.post("login", use: loginHandler)
  }

  func getAllHandler(_ req: Request) -> EventLoopFuture<[User.Public]> {
    User.query(on: req.db).all().convertToPublic()
  }

  func getHandler(_ req: Request) -> EventLoopFuture<User.Public> {
    User.find(req.parameters.get("id"), on: req.db)
      .unwrap(or: Abort(.notFound))
      .convertToPublc()
  }

  func createHandler(_ req: Request) throws -> EventLoopFuture<User.Public> {
    let user = try req.content.decode(User.self)
    user.password = try Bcrypt.hash(user.password)
    
    return user.save(on: req.db).map { user.convertToPublic() }
  }

  func loginHandler(_ req: Request) throws -> EventLoopFuture<Token> {
    let user = try req.auth.require(User.self)
    let token = try Token.generate(for: user)
    return token.save(on: req.db).map { token }
  }
}
