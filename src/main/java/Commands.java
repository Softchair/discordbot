import net.dv8tion.jda.api.JDA;
import net.dv8tion.jda.api.entities.Activity;
import net.dv8tion.jda.api.entities.Message;
import net.dv8tion.jda.api.entities.MessageChannel;
import net.dv8tion.jda.api.entities.User;
import net.dv8tion.jda.api.events.message.MessageReceivedEvent;
import net.dv8tion.jda.api.hooks.ListenerAdapter;

import javax.security.auth.login.LoginException;
import java.util.List;
import java.util.Random;

/**
 * @author Camden
 *
 * Houses commands for the bot
 */
public class Commands extends ListenerAdapter {

    @Override
    public void onMessageReceived(MessageReceivedEvent event) {

        //Prefix for commands, can be changed easily
        String prefix = "!";

        //Setup commonly used variables
        User author = event.getAuthor(); 

        //This checks to see if a bot is trying to use the bot
        //and stops it to reduce spam
        if (author.isBot()) {
            return;
        }


        JDA bot = event.getJDA();
        Message message = event.getMessage(); //Sets up the message variable
        MessageChannel channel = event.getChannel(); //Gets the channel the message was sent in
        String msg = message.getContentDisplay(); //Converts the message to a string

        //Logs to the console the message, and who it was from
        System.out.println("Messaged received from " + event.getAuthor().getName() + ": " +event.getMessage().getContentDisplay());


        //If statements to handle commands
        //In future, refactor this so its not as complex
        if (msg.equals(prefix + "cf") || msg.equals(prefix + "coinflip")) {
            coinflip();
        } else if (msg.startsWith(prefix + "repeat")) {
            repeat();
        } else if (msg.startsWith(prefix + "whoami")) {
            whoAmI();
        } else if (msg.startsWith(prefix + "pfp") || msg.startsWith(prefix + "profilepic")) {
            profilePic();
        } else if (msg.equals(prefix + "ping")) {
            onlineStatus();
        } else if (msg.startsWith(prefix + "status")) {
            statusMessage();
        } else if (msg.equals(prefix + "shutdown")) {
            shutdown();
        } else if (msg.equals(prefix + "boo")) {
            boo();
        }

        /**
        Coinflip command
        Using random function, generates a random number and
        returns heads or tails, or perfect!
        */
        private void coinflip() {
            Random ran = new Random();
            int num = ran.nextInt(100);
            if (num < 50) {
                channel.sendMessage("Tails!").queue();
            } else if (num > 50) {
                channel.sendMessage("Heads!").queue();
            } else {
                channel.sendMessage("Perfect even! Reroll").queue();
            }
        }

        /**
        Repeat command
        Takes the users message and repeats it as the bot
        */
        private void repeat() {
            String[] temp = msg.split(" ", 2);
            channel.sendMessage(temp[1]).queue();
            message.delete().queue();
        }

        /**
        WhoAmI command
        Responds with data about your discord user like ID
        */
        private void whoAmI() {
            channel.sendMessage("You are " + author + "!").queue();
            channel.sendMessage("Your ID is " + author.getId()).queue();
            channel.sendMessage("Lets see if you're a bot: " + author.isBot()).queue();
        } 
        
        /**
        Profile picture command
        Gets a users profile picture and sends it back into the channel
        */
        private void profilePic() {
            if (msg.startsWith("!pfp") && msg.length() > 4 || msg.startsWith("!profilepic") && msg.length() > 11) {
                List<User> mention = message.getMentionedUsers();
                for (int i = 0; i < mention.size(); i++) { //Can now mention multiple people and get all avatars
                    User tempUser = mention.get(i);
                    channel.sendMessage(tempUser.getName() + "'s avatar: ").queue();
                    if (tempUser.getAvatarUrl() == null) {
                        return; //If no user, or end of list, return
                    } else {
                        channel.sendMessage(tempUser.getAvatarUrl()).queue();
                    }
                }
            } else {
                channel.sendMessage("Your avatar: ").queue();
                if (author.getAvatarUrl() == null) { //If no user, return
                    return;
                }
                channel.sendMessage(author.getAvatarUrl()).queue();
            }
        } 
        
        /**
        Online status
        Returns pong if the bot is online
        */
        private void onlineStatus() {
            channel.sendMessage("Pong! I'm online!").queue();
        } 

        /**
        Status message command
        Allows the bot owner to update the status message
        */
        private void statusMessage() {
            if (author.getId().equals("286647094456877056")) {
                String[] temp = msg.split(" ", 2);
                bot.getPresence().setActivity(Activity.playing(temp[1]));
            } else {
                channel.sendMessage("You are not the owner, this command doesn't work for you").queue();
            }
        } 

        /**
        Boo command
        Scares everyone but owner
        */
        private void boo() {
            if (author.getId().equals("286647094456877056")) {
                channel.sendMessage("I cant scare you, im your son!").queue();
            } else {
                channel.sendMessage("BOO!").queue();
                channel.sendMessage("Got you with that didnt i :)").queue();
            }
        }

        /**
        Shutdown commands
        Turns off the bot
        */
        private void shutdown() {
            if (author.getId().equals("286647094456877056")) {
                channel.sendMessage("Shutting down, goodbye!").queue();
                bot.shutdown();
            } else {
                channel.sendMessage("You are not the owner, this command doesn't work for you").queue();
            }
        }

    }
}