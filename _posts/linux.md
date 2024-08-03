---
title: 'Linux Power User'
publishedAt: 'Aug 3, 2024'
category: dev
description: 'Provides a comprehensive guide for individuals looking to enhance their proficiency with the Linux operating system. The article outlines essential skills and practices that define a power user, emphasizing the importance of mastering the command line interface (CLI), scripting, and system customization.'
author: Rithik
---

## Using The Shell
In most Linux systems, your default shell is the bash shell. To find out what your default login shell is, type the following commands:
```bash
who am i            # shows logged in user username
hostname            # shows your system's name
id                  # shows your ID : uid, gid
uname               # type of system 
uname -a            # type with hostnsme, kernel version
who -uH             # u-idle time id, h-header
type bash           # shows location of the shell
which bash -a       # shows location of bash
which zsh -a        # shows location of zsh    
~azula              # home dir of user
@linux              # hostname taken from \etc\hosts file
finger              # dislays useful info about logged in user
finger root         # dislays useful info about root user

# Output
# hostname : MacBook-Air.local
# uname : Linux
# id : 23, 93
# bash : /bin/bash
# who -uH : # azula            console      Jul 15 10:50  old       377
```

## Manual Page
Although most Linux users have a preference for one shell or another, when you know how to use one shell, you can quickly learn any of the others by occasionally referring to the shell’s man page (for example, type man bash)
```bash
man bash
man emacs
```

## Shell History
Unix-like shells, such as Bash or Zsh, maintain a history of commands you've executed. This feature enhances productivity and allows for easy recall of previously used commands. The shell typically saves command history to a file in your home directory:
> For Bash: `~/.bash_history`
> 
> For Zsh: `~/.zsh_history`

```bash
HISTSIZE=1000               # Number of commands to keep in memory
HISTFILESIZE=2000           # Number of commands to save to history file
HISTCONTROL=ignoredups      # Don't save duplicate commands
```

The number of commands stored is configurable and can be set using the `HISTSIZE` environment variable.
There are several ways to access and utilize your command history: `Up Arrow (↑)`: Move to previous commands, `Down Arrow (↓)`: Move to more recent commands, `History` command
```bash
history 10  # lists recent 10 commands stored in .bash_history file
# 383 date
# 384 man sort
# 385 cd /usr/local/bin

!384    # run 384th command from history list above
!!      # run again the same cmd
fc 384  # opens vi
```

> **Note**
>
>  Some people disable the history feature for the root user by setting the `HISTFILE` to `/dev/null` or simply leaving `HISTSIZE` blank. This prevents information about the root user’s activities from potentially being exploited. If you are an administrative user with root privileges, you may want to consider emptying your file upon exiting as well for the same reasons. Also, because shell history is stored permanently when the shell exits properly, you can prevent storing a shell’s history by killing a shell. For example, to kill a shell with process `ID 1234, type kill -9 1234` from any shell.

## Running Basic Commands and their uses
Below are essential commands that every power user should be familiar with and utilize on a daily basis.
```bash
clear                     # clears the text in the terminal
date                      # Sat Oct 19 08:04:00 EST 2024
date +'%d/%m/%y'          # 10-21-24
date +'%A, %B %d, %Y'     # Tuesday, October 21, 2024
pwd                       # print current directory you are in
cd ~root                  # change directory to root user's home directory
ls                        # list files in current directory
ls -lat                   # list files with options: a-hidden, t-list by time, l-long listing
ls -l -a -t               # same as about command with seperate options
ls --hide=Desktop         # list files except:Desktop
echo $OSTYPE              #  display text or variables(Standard Input)
cat /etc/passwd           # read, display contents of files
```

When you hit the Tab key, for example, after typing `echo $P`, it will display available options that can follow the text "P". Similarly, if you type `cat /etc/`, pressing the Tab key will display all the contents inside the `/etc folder` as options.
```bash
echo $P<tab>
# PATH  PPID  PS1 PS2  PS4  PWD
```

## Set Command
The set command in Linux is a built-in shell command used primarily to set or unset shell options and positional parameters within the shell environment. It plays a crucial role in managing the behaviour of shell scripts and the command line interface.
The set command can be used to:
- Display the names and values of shell variables and functions.
- Modify shell options that affect the behaviour of the shell.
- Set positional parameters which are used to access command-line arguments in scripts.
```bash
set -o vi           # set this line in .bashrc to use vi commands to edit in shell
set -x              # enable debugging for commands used to debug shell scripts
set -f              # Disables filename expansion (globbing).
```

## Connecting and expanding commands
So far, we have executed single commands in the shell. However, we can combine multiple commands together to achieve our desired outcomes more efficiently. We can achieve this by using **metacharacters**.

### Metacharacters 
- `<` , `>` , `>>` and `<<` -   redirects the standard input.
- `|` (pipe)  - redirects output as input to next command
- `;` - runs next command after completing the current command
- `&` (ampersand)  - run the command in background
- `)` and `( ` - paranthesis 

```bash
echo hello > /dev/null                                          # rediects "hello" to "\dev\null" file
cat /etc/passwd | sort | less                                   # fetches contents of the file | sorts the content | displays them
date ; (troff -me verylargedocument) | lpr ; date               # troff(groff) formats document, lpr printer, date runs before and after
gunzip < /usr/share/man/man1/grep.1.gz | nroff -c -man | less
troff -me verylargedocument | lpr &                             # runs in background
```