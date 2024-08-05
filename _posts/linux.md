---
title: 'Linux Power User'
publishedAt: 'Aug 3, 2024'
category: dev
description: 'Provides a comprehensive guide for individuals looking to enhance their proficiency with the Linux operating system. The article outlines essential skills and practices that define a power user, emphasizing the importance of mastering the command line interface (CLI), scripting, and system customization.'
author: Rithik
---

> This post is highly inspired by the Book - **Linux Bible by Christopher Negus**. I highly recommend reading this book to further improve you knowledge and skills on Linux.

## Using The Shell
The shell is a powerful way to interact with your system, allowing you to execute commands and manage your environment. There are several types of shells available, such as Bash, Zsh, and others. By using the shell, you can instruct your system to perform various tasks by typing specific commands. These commands are essentially binaries or scripts that the system executes.

To get started, open a terminal on your Linux or Mac system and try out the following basic commands to familiarize yourself with your system:
```bash
who am i                  # shows logged in user username
hostname                  # shows your system's name
id                        # shows your ID : uid, gid
uname                     # type of system 
uname -a                  # type with hostnsme, kernel version
who -uH                   # u-idle time id, h-header
type bash                 # shows location of the shell
which bash -a             # shows location of bash
which zsh -a              # shows location of zsh    
~azula                    # home dir of user
@linux                    # hostname taken from \etc\hosts file
finger                    # dislays useful info about logged in user
finger root               # dislays useful info about root user
date                      # Sat Oct 19 08:04:00 EST 2024
date +'%d/%m/%y'          # 10-21-24
date +'%A, %B %d, %Y'     # Tuesday, October 21, 2024

# Output
# hostname : MacBook-Air.local
# uname : Linux
# id : 23, 93
# bash : /bin/bash
# who -uH : # azula            console      Jul 15 10:50  old       377
```

## Manual Page
While most Linux users tend to favor a particular shell, such as Bash or Zsh, the fundamental skills you acquire in one shell can be easily transferred to others. Once you become proficient in using a shell, adapting to a different one becomes a straightforward process. You can get to know the shell or the binaries by reading their documentation page called **man**
```bash
man bash
man emacs
```

## System Users
Each Linux system is managed through a set of users and associated permissions, ensuring secure and organized access to system resources. Every user has a unique user ID (UID) and group ID (GID), which you can discover by running the commands mentioned earlier. Each user also has a designated home directory where they can store personal files and configurations.

To navigate to your home directory, check your current directory, move between directories, and view the contents within them, try running the following commands:
```bash
pwd                       # print current directory you are in
cd ~root                  # change directory to root user's home directory
ls                        # list files in current directory
ls -lat                   # with options: a-hidden files, t-list by time, l-long listing
ls -l -a -t               # same as about command with seperate options
ls --hide=Desktop         # list files except:Desktop
clear                     # clears the text in the terminal
```

## Shell History
Unix-like shells, maintain a history of commands you've executed. This feature enhances productivity and allows for easy recall of previously used commands. The shell typically saves command history to a file in your home directory:
- For Bash: `~/.bash_history` 
- For Zsh: `~/.zsh_history`

The number of commands stored is configurable and can be set using the `HISTSIZE` environment variable. Environment variables are discussed in detail in the upcoming sections.
```bash
HISTSIZE=1000               # Number of commands to keep in memory
HISTFILESIZE=2000           # Number of commands to save to history file
HISTCONTROL=ignoredups      # Don't save duplicate commands
```

There are several ways to access and utilize your command history: `Up Arrow (↑)`: Move to previous commands, `Down Arrow (↓)`: Move to more recent commands, `History` command
```bash
history 10                 # lists recent 10 commands stored in .bash_history file
# 383 date
# 384 man sort
# 385 cd /usr/local/bin

!384                       # run 384th command from history list above
!!                         # run again the same cmd
fc 384                     # opens vi
```

> **Note**
> 
>  Some people disable the history feature for the root user by setting the `HISTFILE` to `/dev/null` or simply leaving `HISTSIZE` blank. This prevents information about the root user’s activities from potentially being exploited. If you are an administrative user with root privileges, you may want to consider emptying your file upon exiting as well for the same reasons. Also, because shell history is stored permanently when the shell exits properly, you can prevent storing a shell’s history by killing a shell. For example, to kill a shell with process `ID 1234, type kill -9 1234` from any shell.

##  Tab Key, Shell Variables, Environment Variables, and Alias
Variables are fundamental components in programming languages, allowing you to store and manipulate data. Shell scripting is no exception, offering a powerful way to work with variables directly from the command line or within scripts.
Similarly in Shell we can create Shell variables. To create a Shell variable type the following command:
```bash
NAME="Azula"
echo $NAME  # displays or echoes "Azula"
```

Caveat is that Shell variables are temporary and have a limited scope. They exist only within the current shell session. When you close the terminal or end the shell session, these variables are destroyed. They are not accessible to child processes or other shell instances. To make variables permanent we export them. These exported variables are called **Environment Variables.** There are many default environment variables our system uses. Some of them are mentioned below
```bash
export NAME="Azula"                     # Creates a Env variable
echo "I am $[2024 - 1997] years old."   # I am 27 years old.
echo $BASH                              # current SHELL. $SHELL in Mac
echo $PS1                               # shell prompt line. $PROMPT in Mac
echo $MAIL                              # mail box
echo $OSTYPE                            # darwin23.0
echo $RANDOM                            # displays a random number between 0 and 99999.
echo $PWD                               # current directory
echo $OLDPWD                            # previous directory
echo $SECONDS                           # number of seconds since the time the shell was started.
```

### The Set Command
As you see there are tons of Environment variables available. To list all the Shell variables and Environment variables, we can use the `set` and  `env` commands.
```bash
env             # show all env variables
printenv        # show all env variables
set             # show all Shell and Env variables
unset NAME      # deletes a variable
```

The set command is a built-in shell command in Linux that is essential for managing the shell environment. It serves multiple purposes, including:
- Displaying Variables: Lists the names and values of shell variables and functions.
- Modifying Shell Options: Adjusts various shell options that influence the behavior of the shell.
- Setting Positional Parameters: Defines positional parameters that are used to access command-line arguments in scripts.
```bash
set -o vi       # set this line in .bashrc to use vi commands to edit in shell
set -x          # enable debugging for commands used to debug shell scripts
set -f          # Disables filename expansion (globbing).
```

### Tab Key
When you hit the Tab(⇥) key, for example, after typing `echo $P`, it will display available options that can follow the text "P". Similarly, if you type `cat /etc/`, pressing the Tab key will display all the contents inside the `/etc` folder as options. Tab key is especially useful when you want to type a long command or a directory path in the Shell.
```bash
echo $P<tab>
# PATH  PPID  PS1  PWD
```

### The Alias
Aliases allow you to create shorthand commands for frequently used commands in the shell. By defining an alias, you can simplify complex commands and access them quickly. For example, you can create an alias for a long command, making it easier to execute with just a few keystrokes. To create and use a alias use the following commands
```bash
alias y='echo $(date +"%Y")'    # creates an alias "y"
y                               # 2024(current year)
alias                           # lists all alias
```

## Connecting and extending commands
So far, we have executed single commands in the shell. However, we can combine multiple commands together to achieve our desired outcomes more efficiently. We can achieve this by using **metacharacters**.

### Metacharacters 
- `<` , `>` , `>>` and `<<` - redirects the standard input and output.
- `|` (pipe) - redirects output as input to next command.
- `;` - runs next command after completing the current command.
- `&` (ampersand) - run the command in background.
- `)` and `( ` - paranthesis for command substitution.

```bash
echo hello > /dev/null                                      # rediects "hello" to "\dev\null" file
cat /etc/passwd | sort | less                               # fetches contents of the file | sorts the content | displays them
echo "There are $(ls | wc -l) files in this directory."     # ls lists all files and wc -l  counts no of files or lines.
date ; (troff -me document) | lpr ; date                    # troff(groff) formats document, lpr printer, date runs before and after
npm start &                                                 # runs a localhost in background
```

## Files, and File System
Whether you are using a personal computer or a server, working with files and directories is essential. Creating, organizing, and navigating through files and folders are fundamental tasks for any user. To effectively manage your files, let's explore some basic commands that will help you move around and manipulate your file system with ease. 
```bash
touch hello.txt                      # creates a file called hello.txt
mkdir files                          # creates a directory called files
ln -s file pointer_to_file           # Symbolic link
cat                                  # displays contents of the file
less                                 # display file one page or screen at a time from start
head -10 hello.text                  # displays fiest 10 lines of the file
tail -10 hello.txt                   # displays last 10 lines of the file
cp file1.txt /folder1/file2.txt      # copy a file from current directory to another and renames the file
cp -r dir1/ dir2/                    # copy a directory recursively from one directory to another
mv file1.txt /path/to/destination/   # move a file fromone folder to another folder
mv oldname.txt newname.txt           # rename a file
rm file1.txt                         # remove a file
rm -r dir1/                          # Remove a directory and its contents recursively
rm -rf dir1/                         # Force remove without prompt
rmdir folder1                        # remove an directory
rmdir -p dir1/dir2/                  # remove parent directories if they are empty
```

###  File-matching metacharacters
To streamline your workflow and simplify file management, the Bash shell allows the use of file matching metacharacters. These special characters enable you to refer to groups of files or directories easily when listing, opening, or removing them. Here are some useful metacharacters for matching filenames:
- *—Matches any number of characters.
- ?—Matches any one character.
- [..]—Matches any of the hyphen-separated range of letters or numbers.

###  File-redirection metacharacters
Commands in the shell typically receive data from standard input (stdin) and send output to standard output (stdout). You can use pipes to direct the output of one command as the input to another, facilitating powerful command combinations. Additionally, you can manage data flow to and from files using redirection operators. The key file-redirection characters are: 
- `<` Directs the contents of a file to the command. In most cases, this is the default action expected by the command.
- `>` Directs the standard output of a command to a file. If the file exists, the content of that file is overwritten.
- `2>` Directs standard error (error messages) to the file.
- `&>` Directs both standard output and standard error to the file.
- `>>` Directs the output of a command to a file, adding the output to the end of the existing file.

###  Brace expansion characters
Expansion facilitates the generation of multiple strings from a single command, thereby enhancing command-line efficiency and reducing the need for repetitive typing. This mechanism operates by enclosing a list of items or a range within curly braces `{}`.

Lets Look at all these Metacharacters in action.
```bash
ls -ltr /etc/p*                             # lists all files and directories starting with p
ls file?.txt                                # lists files that match the pattern file1, file2, filex..
ls file[1-3].txt                            # lists files that match the pattern. Only file1, file2, file3
touch memo{1,2,3,4,5}                       # memo1 memo2 memo3 memo4 memo5
touch {a..c}{1..3}                          # a1 a2 a3 b1 b2 b3 b4 c1 c2 c3
sort < unsorted.txt                         # sort lines in unsorted.txt file
echo "Hello, World!" > greeting.txt         # overwrites greeting.txt with text
ls non_existent_file 2> error.log           # writes error message to error.log file
cat non_existent_file.txt &> output.log     # writes both error and messages to output.log
echo "Another line" >> greeting.txt         # appends text to greeting.txt
mail root seki ryuu <<EOF                   
> Hello Everyone!
> Thanks for your support!.                 # Mail users-root, seki, and ryuu with the HereText("string inside EOF...EOF")
> -- Azula
> EOF 
```

## File Permissions
Linux file permissions are a crucial aspect of the operating system's security model, allowing users to control access to files and directories. Understanding these permissions is essential for maintaining system integrity and protecting sensitive data. In Linux, file permissions determine who can read, write, or execute a file. These permissions are associated with three types of users:
```bash
-   r w x  r w x  r - -                     # (types of permissions)
|   |___|  |___|  |___|
|     |      |      |
|   owner  group  other                     # (types of users)
|    
|   "-" regular file,  "d" directory        # File type

```

> # Yet to cover topics in this article Will be covered in next upcoming weeks.

```bash
umask
chmod
chown
```

## Searching Texts, Files, and Directories
```bash
updatedb # /var/db/locate.database in mac
locate
find
grep
wc
```

## Linux files
## Processes
## Writing Shell Scripts
