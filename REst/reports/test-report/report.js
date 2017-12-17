$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("myFEature.feature");
formatter.feature({
  "line": 2,
  "name": "MyFeature",
  "description": "",
  "id": "myfeature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smokeTest"
    }
  ]
});
formatter.scenario({
  "line": 3,
  "name": "MyScenario",
  "description": "",
  "id": "myfeature;myscenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "First step",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "second step",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "third step",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.first_step()"
});
formatter.result({
  "duration": 210153569,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.second_step()"
});
formatter.result({
  "duration": 606352298,
  "error_message": "java.lang.NoClassDefFoundError: org/apache/http/client/HttpClient\r\n\tat io.restassured.config.HttpClientConfig.defaultHttpClientFactory(HttpClientConfig.java:264)\r\n\tat io.restassured.config.HttpClientConfig.\u003cinit\u003e(HttpClientConfig.java:76)\r\n\tat io.restassured.config.RestAssuredConfig.\u003cinit\u003e(RestAssuredConfig.java:41)\r\n\tat io.restassured.RestAssured.\u003cclinit\u003e(RestAssured.java:420)\r\n\tat MyStepdefs.second_step(MyStepdefs.java:38)\r\n\tat ✽.When second step(myFEature.feature:5)\r\nCaused by: java.lang.ClassNotFoundException: org.apache.http.client.HttpClient\r\n\tat java.net.URLClassLoader.findClass(URLClassLoader.java:381)\r\n\tat java.lang.ClassLoader.loadClass(ClassLoader.java:424)\r\n\tat sun.misc.Launcher$AppClassLoader.loadClass(Launcher.java:331)\r\n\tat java.lang.ClassLoader.loadClass(ClassLoader.java:357)\r\n\tat io.restassured.config.HttpClientConfig.defaultHttpClientFactory(HttpClientConfig.java:264)\r\n\tat io.restassured.config.HttpClientConfig.\u003cinit\u003e(HttpClientConfig.java:76)\r\n\tat io.restassured.config.RestAssuredConfig.\u003cinit\u003e(RestAssuredConfig.java:41)\r\n\tat io.restassured.RestAssured.\u003cclinit\u003e(RestAssured.java:420)\r\n\tat MyStepdefs.second_step(MyStepdefs.java:38)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:497)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:78)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:212)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:68)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:497)\r\n\tat com.intellij.rt.execution.application.AppMain.main(AppMain.java:140)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyStepdefs.third_step()"
});
formatter.result({
  "status": "skipped"
});
});