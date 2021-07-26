//
//  CreateUser.swift
//  Creates a User model
//
//  Created by Richard Hancock on 7/26/21.
//

import Fluent
import Vapor

struct CreateUser: Migration {
  func prepare(on database: Database) -> EventLoopFuture<Void> {
    database.schema("users")
      .id()
      .field("username", .string, .required)
      .field("passwordHash", .string, .required)
      .field("displayName", .string, .required)
      .field("email", .string, .required)
      .field("role", .int, .required)
      .unique(on: "username")
      .unique(on: "email")
      .create()
  }

  func revert(on database: Database) -> EventLoopFuture<Void> {
    database.schema("users").delete()
  }
}
