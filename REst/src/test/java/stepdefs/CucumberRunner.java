package stepdefs;

import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
/**
 * Created by Администратор on 16.12.2017.
 */
@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"pretty"},
        glue = {"stepdefs"},
        features = {"src/test/resources/myFEature.feature"})
public class CucumberRunner {
}
