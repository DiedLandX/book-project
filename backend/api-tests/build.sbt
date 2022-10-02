lazy val apiTests = (project in file(".")).settings(
  name := "api-tests",

  version := "0.1",

  scalaVersion := "2.13.8",

  libraryDependencies ++= Seq(
    "com.github.agourlay" %% "cornichon-test-framework" % "0.20.4" % Test
  ),

  // move this to a project
  testFrameworks += new TestFramework("com.github.agourlay.cornichon.framework.CornichonFramework"),
)