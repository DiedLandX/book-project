package books.auth

import com.github.agourlay.cornichon.CornichonFeature

class AuthHttpServiceFeature extends CornichonFeature {

  def feature = Feature("AuthHttpService") {

    Scenario("Return a jwt token that can be used to fetch a user") {

      When I post("http://localhost:8090/login").withBody(
        """{
          |  "username": "raw",
          |  "password": "war"
          |}""".stripMargin)

      Then assert status.is(200)
      save_body("token")

      When I get("http://localhost:8090/user/email@email.com")
        .addHeaders("Authorization" -> s"Bearer <token>")

      Then assert status.is(200)
      Then assert body.whitelisting.is(
        """{
          |  "email" : "email@email.com",
          |  "name" : "Test User"
          |}""".stripMargin)
    }


    Scenario("cors shit") {
      When I options("http://localhost:8090/login")
        .withHeaders("origin" -> "localhost", "access-control-request-method" -> "POST")

      Then assert status.is(204)

//      Then assert headers.is("asd" -> "asd")
    }
  }
}
