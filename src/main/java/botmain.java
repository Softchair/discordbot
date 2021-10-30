import groovyjarjarantlr.debug.MessageListener;
import net.dv8tion.jda.api.JDABuilder;
import net.dv8tion.jda.api.entities.Activity;
import net.dv8tion.jda.api.events.message.MessageReceivedEvent;
import net.dv8tion.jda.api.hooks.ListenerAdapter;
import javax.security.auth.login.LoginException;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.Properties;

/**
 * @author Camden
 *
 * Main for discord bot, more to be added soon
 */
public class botmain {

    static String key;
    public static JDABuilder bot;
    public static String prefix;

    public static void main(String[] args) throws LoginException {
        configLoader(); //Load values from config

        bot = JDABuilder.createDefault(key); //Creates a new bot with key
        bot.setActivity(Activity.playing("Am I working again??"));

        bot.addEventListeners(new Commands());

        bot.build();

        
    }

    private static void configLoader() {
        System.out.println("Loading config");
        File configFile = new File("config.properties");

        try {
            FileReader reader = new FileReader(configFile); //Create a reader for the file
            Properties props = new Properties();
            props.load(reader); //Load the reader into the file

            key = props.getProperty("key"); //Set key as key from config file
            prefix = props.getProperty("prefix");
            reader.close();
        } catch (FileNotFoundException e) {
            System.out.println("File doesn't exist");
        } catch (IOException e) {
            System.out.println("IO Exception");
        }
    }
}
