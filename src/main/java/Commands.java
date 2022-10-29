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

        User author = event.getAuthor(); //Setup commonly used variables

        if (author.isBot()) { //Returns if its a bot
            return;
        }

        JDA bot = event.getJDA();
        Message message = event.getMessage(); //Setup commonly used variables
        MessageChannel channel = event.getChannel();
        String msg = message.getContentDisplay(); //Human readable message


        System.out.println("Messaged received from " + event.getAuthor().getName() + ": " +event.getMessage().getContentDisplay());

     
            message.delete().queue();
        }

        private void whoAmI() {
            channel.sendMessage("You are " + author + "!").queue();
            channel.sendMessage("Your ID is " + author.getId()).queue();
            channel.sendMessage("Lets see if you're a bot: " + author.isBot()).queue();
        } 
        
        
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
        
        private void onlineStatus() {
            channel.sendMessage("Pong! I'm online!").queue();
        } 

        private void statusMessage() {
            if (author.getId().equals("286647094456877056")) {
                String[] temp = msg.split(" ", 2);
                bot.getPresence().setActivity(Activity.playing(temp[1]));
            } else {
                channel.sendMessage("You are not the owner, this command doesn't work for you").queue();
            }
        } 

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
