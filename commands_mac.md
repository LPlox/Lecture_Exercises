# Commands

write `code .` in the correct folder to open vscode inside folder, if you have set vscode to your [PATH](https://www.freecodecamp.org/news/how-to-open-visual-studio-code-from-your-terminal/).

| command                   | action                     |
| ------------------------- | -------------------------- |
| cmd + C                   | Copy                       |
| cmd + V                   | Paste                      |
| cmd + X                   | Cut                        |
| cmd + Z                   | Undo                       |
| cmd + shift + Z / cmd + Y | Redo                       |
| cmd + shift + V           | paste text without styling |
| shift + arrow keys        | select text                |
| cmd + F                   | Search on page             |

## Mac

| command                                          | action                                          |
| ------------------------------------------------ | ----------------------------------------------- |
| ls                                               | List files and folders                          |
| clear                                            | Clear the terminal screen                       |
| pwd                                              | Full path of current folder/directory           |
| cd..                                             | Go back in directory                            |
| cd <path to directory>                           | Move in folder structure                        |
| mkdir <newFolderName>                            | Create new directory in current directory       |
| mkdir newFolder                                  | Create new directory in current directory       |
| touch <fileName>                                 | Create new file                                 |
| cat <fileName>                                   | Concatenate and print a file                    |
| mv <oldFolderName> <newFolderName>               | Rename a directory                              |
| cp -r <myFolder> <path to destination directory> | Copy a directory                                |
| cp myFile <path to destination directory>        | Copy a file                                     |
| mv <myFolder> <path to destination directory>    | Move a directory                                |
| rm myFile                                        | Remove a file\*                                 |
| rmdir <folderName>                               | Remove a directory.\*                           |
| rm -r                                            | Remove a folder with it's content (recursive)\* |
| rm \*.pdf                                        | Remove everything with pdf file ending \*       |

\*Be careful when deleting! You won't be able to get anything back!

Let the terminal suggest to shorten your writing time. Write a command and tab through all the folder and file options. Or write the first 2 letters and tab to finish the foldername or filename. You can chain multiple folder structure and let the terminal suggest all of them. Use cmd + space if you want a full folder view.

### To exit terminal use

| command |
| ------- |
| cmd + c |

### To exit vim use

| command | action                            |
| ------- | --------------------------------- |
| :q      | to quit.                          |
| :q!     | to quit without saving data/file. |
| :x      | save and quit.                    |
| :qa     | to quit all open files.           |
