package stepdefs;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.http.ContentType;
import org.apache.http.client.methods.RequestBuilder;
import org.junit.Assert;

import static io.restassured.RestAssured.*;
import static io.restassured.RestAssured.when;

/**
 * Created by Администратор on 16.12.2017.
 */
public class MyStepdefs extends Configs {

    @Given("First step")
    public void first_step() throws Throwable {

        RequestSpecBuilder builder = new RequestSpecBuilder();
        builder.addHeader("MyHeader","MyValue");
        builder.setAccept(ContentType.XML);
        requestSpec = builder.build();
    }

    @When("second step")
    public void second_step() throws Throwable {
        response =
                given().
                        when().get("http://postman-echo.com/get?test=123").
                        then().extract().response();
    }

    @Then("third step")
    public void third_step() throws Throwable {
        Assert.assertTrue(response.getStatusCode() == 200);
        //response.getBody().jsonPath();
        System.out.println(response.path("args.test"));
        //System.out.println(response.getHeaders().toString());

    }

}
