//
//  User.swift
//  User Model
//
//  Created by Richard Hancock on 7/26/21.
//

import Vapor
import Fluent

final class User: Model {
  static let schema = "users"

  @ID(key: "id")
  var id: UUID?

  @Field(key: "username")
  var username: String

  @Field(key: "passwordHash")
  var password: String

  @Field(key: "displayName")
  var displayName: String

  @Field(key: "email")
  var emailAddress: String

  @Field(key: "role")
  var userRole: User.UserRole

  init() {}

  init(id: UUID? = nil, username: String, password: String, displayName: String, emailAddress: String, userRole: User.UserRole) {
    self.id = id
    self.username = username
    self.password = password
    self.displayName = displayName
    self.emailAddress = emailAddress
    self.userRole = userRole
  }

  final class Public: Content {
    var id: UUID?
    var username: String
    var displayName: String
    var emailAddress: String

    init(id: UUID?, username: String, displayName: String, emailAddress: String) {
      self.id = id
      self.username = username
      self.displayName = displayName
      self.emailAddress = emailAddress
    }
  }

  enum UserRole: Int, Codable {
    case fan = 0
    case creator = 10
    case moderator = 80
    case administrator = 90
    case superAdministator = 99
  }
}

extension User: Content {}

extension User {
  func convertToPublic() -> User.Public {
    return User.Public(id: id, username: username, displayName: displayName, emailAddress: emailAddress)
  }
}

extension EventLoopFuture where Value: User {
  func convertToPublc() -> EventLoopFuture<User.Public> {
    return self.map { user in
      return user.convertToPublic()
    }
  }
}

extension Collection where Element: User {
  func convertToPublic() -> [User.Public] {
    return self.map { $0.convertToPublic() }
  }
}

extension EventLoopFuture where Value == Array<User> {
  func convertToPublic() -> EventLoopFuture<[User.Public]> {
    return self.map { $0.convertToPublic() }
  }
}

extension User: ModelAuthenticatable {
  static let usernameKey = \User.$username
  static let passwordHashKey = \User.$password

  func verify(password: String) throws -> Bool {
    try Bcrypt.verify(password, created: self.password)
  }
}
