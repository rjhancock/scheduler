//
//  CreateAdminUser.swift
//  Seed data for testing. Remove for production
//
//  Created by Richard Hancock on 7/26/21.
//

import Fluent
import Vapor

struct CreateAdminUser: Migration {
  func prepare(on database: Database) -> EventLoopFuture<Void> {
    let passwordHash: String

    do {
      passwordHash = try Bcrypt.hash("password")
    } catch {
      return database.eventLoop.future(error: error)
    }

    let user = User(username: "foxgod", password: passwordHash, displayName: "Cypuss", emailAddress: "cypuss@foxgod.net", userRole: .administrator)
    return user.save(on: database)
  }

  func revert(on database: Database) -> EventLoopFuture<Void> {
    User.query(on: database)
      .filter(\.$username == "foxgod")
      .delete()
  }
}
