function getBotResponse(input) {
    // Simple responses
    if (input == "hello") {
        return "Hello there! What can I do for you?";
    } else if (input == "hi") {
        return "Hi there! What can I do for you?";
    } else if (input == "commands") {
        return "Keywords/Commands: <br/><br/> <strong>about</strong> - it will show the 'about us'. <br/> <strong>contact</strong>- it will show 'contact info'. <br/> <strong>commands</strong> - it will show 'keyword'. <br/> <strong>location</strong> - it will show our address.";
    } else if (input == "about") {
        return "Hi there! <br /><br /> <strong>AlgoByte</strong> is a page where you can find important facts about the technology of the Philippines.";
    } else if (input == "contact") {
        return "Here's our contact information: <br /><br /> <strong>Email:</strong> info@algofilipino.com | algofilipinoofficers@gmail.com <br /> <strong>Phone Number:</strong> 0995-1824-133 <br /> <strong>Address:</strong> 1616 Felix Huertas Rd, Santa Cruz, Manila ";
    } else if (input == "location") {
        return "Here's our address: <strong>1616 Felix Huertas Rd, Santa Cruz, Manila</strong>";
    /*
    } else if (input == "hi") {
        return "Hi there! What can I do for you?";
    } else if (input == "hi") {
        return "Hi there! What can I do for you?";
    } else if (input == "hi") {
        return "Hi there! What can I do for you?";
    } else if (input == "hi") {
        return "Hi there! What can I do for you?";
    } else if (input == "hi") {
        return "Hi there! What can I do for you?";
    } else if (input == "hi") {
        return "Hi there! What can I do for you?";
    */
    } else {
        return "Try asking something else!";
    }
}