const reverse = !GlobalVars.getBoolean("ToggleScript");
GlobalVars.putBoolean("ToggleScript", reverse);
if (reverse) {
    Chat.log(Chat.createTextBuilder().append("[").withColor(0x7)
        .append("ToggleScript").withColor(0x5)
        .append("]").withColor(0x7).append(" enabled").withColor(0xc)
        .build());
} else {
    Chat.log(Chat.createTextBuilder().append("[").withColor(0x7)
        .append("ToggleScript").withColor(0x5)
        .append("]").withColor(0x7).append(" disabled").withColor(0xc)
        .build());
}
 
// we want to edit this one here, since it's the loop that runs. the other stuff just shows when you toggle it prettily with colors in chat. Right here I've added a line to set the state of the spacebar (up or down) to true. 
 
// Wait 1 tick and then repeatedly check whether or not we are still holding
while (GlobalVars.getBoolean("ToggleScript")) {
    KeyBind.key("key.keyboard.space", true); // moved in here
    Client.waitTick(1);
}
 
// set back to false when we're done holding it down
KeyBind.key("key.keyboard.space", false);