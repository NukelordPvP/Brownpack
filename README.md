# Brownpack - Official Brownman Modpack

## Brownpack Keybindings Docs
[Link to Keybindings Documentation](https://docs.google.com/spreadsheets/d/1Je7ERexaVkZ2_LdwMWhTmKsgWHRrg4BAP9He4hxWVG4/edit#gid=0)

## Important: How to Create a New Brownpack Instance
1. Run Brownpack-Export.jar and Brownpack-Export-Symlink.jar (e.g., `/Brownpack/Brownpack-Export`).
2. Compare your export to the example images export.
3. After generating `/Brownpack/Brownpack-Export/Brownpack-Local-Symlink-Export`, copy the files to a new Minecraft instance called `/Brownpack-Alt-0/`.
4. Follow the steps below to create the symlink folders and files then paste them into `/Brownpack-Alt-0/`. You can create as many instances as you want (e.g., `/Brownpack-Alt-1/`).

## SymlinkCreator Link - Useful for Having Alt Account MC Instances
SymlinkCreator is a tool that helps you globally sync things like worldmap, minimap, and baritone data. You can find it on GitHub: [SymlinkCreator](https://github.com/arnobpl/SymlinkCreator)

### How to Symlink for Folders
1. Install SymlinkCreator then run as admin or it will fail.
2. Select the source (target) folder (e.g., `/Brownpack/screenshots`).
3. Select the output (destination of link) folder (e.g., `/Brownpack-Alt-0/`).

### How to Symlink for Files
1. Install this program.
2. Select the source (target) file (e.g., `/Brownpack/servers.dat`).
3. Select the output (destination of link) folder (e.g., `/Brownpack-Alt-0/`).

### List of Folders to Symlink
- baritone
- data
- Distant_Horizons_server_data
- drippyloadingscreen
- ESM | Extreme Sound Muffler, muffled sounds cordinate data
- meteor-client
- profileImage
- replay_recordings
- resourcepacks
- saves
- schematics
- screenshots
- shaderpacks
- XaeroWaypoints
- XaeroWaypoints_BACKUP032021
- XaeroWorldMap

### List of Files to Symlink
- servers.dat
- servers.dat_old

### List of Folders that cannot be Symlink
- config | access issues
- mods | access issues

### List of Files that cannot be Symlink
- command_history.txt | not needed
- knownkeys.txt | not needed
- options.txt | not recommended if you want to for example lower render distance on alt only

## XaeroPlus
For more useful tools and information, visit the [XaeroPlus GitHub](https://github.com/rfresh2/XaeroPlus).

## Convert Journeymap Waypoints and Worldmap Data to Xaero Format
- [JMtoXaero GitHub](https://github.com/Entropy5/JMtoXaero)
- [JMWaypointsToXaero GitHub](https://github.com/rfresh2/JMWaypointsToXaero)
