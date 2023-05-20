The Bundle one on exercise one


PS C:\Users\dotto\Exercise1-thegym> git status
On branch test
Your branch is up to date with 'origin/test'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   src/index.css
        modified:   src/router/navbar/navbar.css
        modified:   src/router/navbar/navbar.tsx

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        README.md

no changes added to commit (use "git add" and/or "git commit -a")
PS C:\Users\dotto\Exercise1-thegym> git add .
PS C:\Users\dotto\Exercise1-thegym> git commit -m " change in css by creating changes in narvab"  
[test 11ade3d]  change in css by creating changes in narvab
 4 files changed, 26 insertions(+), 71 deletions(-)
 create mode 100644 README.md
PS C:\Users\dotto\Exercise1-thegym> git push
To https://github.com/Gikwayalily/Exercise1-thegym.git
 ! [rejected]        test -> test (fetch first)
error: failed to push some refs to 'https://github.com/Gikwayalily/Exercise1-thegym.git'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
PS C:\Users\dotto\Exercise1-thegym> git push
To https://github.com/Gikwayalily/Exercise1-thegym.git
 ! [rejected]        test -> test (fetch first)
error: failed to push some refs to 'https://github.com/Gikwayalily/Exercise1-thegym.git'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
PS C:\Users\dotto\Exercise1-thegym> gi fetch       
gi : Cannot find path 'C:\Users\dotto\Exercise1-thegym\fetch' because it does not exist.
At line:1 char:1
+ gi fetch
+ ~~~~~~~~
    + CategoryInfo          : ObjectNotFound: (C:\Users\dotto\Exercise1-thegym\fetch:String) [Get-Item], ItemNotFoundExc  
   eption
    + FullyQualifiedErrorId : PathNotFound,Microsoft.PowerShell.Commands.GetItemCommand

PS C:\Users\dotto\Exercise1-thegym> git fetch
remote: Enumerating objects: 2, done.
remote: Counting objects: 100% (2/2), done.
remote: Compressing objects: 100% (2/2), done.
remote: Total 2 (delta 0), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (2/2), 1.21 KiB | 61.00 KiB/s, done.
From https://github.com/Gikwayalily/Exercise1-thegym
   0dc97e4..07a63e4  test       -> origin/test
   a00c784..cd7e642  Dev        -> origin/Dev
PS C:\Users\dotto\Exercise1-thegym> git push 
To https://github.com/Gikwayalily/Exercise1-thegym.git
 ! [rejected]        test -> test (non-fast-forward)
error: failed to push some refs to 'https://github.com/Gikwayalily/Exercise1-thegym.git'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. Integrate the remote changes (e.g.
hint: 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
PS C:\Users\dotto\Exercise1-thegym> git pull 
Merge made by the 'ort' strategy.
PS C:\Users\dotto\Exercise1-thegym> git pull origin Dev
From https://github.com/Gikwayalily/Exercise1-thegym
 * branch            Dev        -> FETCH_HEAD
Already up to date.
PS C:\Users\dotto\Exercise1-thegym> git chechout -b main
git: 'chechout' is not a git command. See 'git --help'.

The most similar command is
        checkout
PS C:\Users\dotto\Exercise1-thegym> git pull
Updating c2ce04c..cd7e642
Fast-forward
 src/router/navbar/navbar.css | 11 ++++++++++-
 1 file changed, 10 insertions(+), 1 deletion(-)
PS C:\Users\dotto\Exercise1-thegym> git pull
Already up to date.
PS C:\Users\dotto\Exercise1-thegym> git push remote origin https://github.com/Gikwayalily/Exercise1-thegym.git
fatal: invalid refspec 'https://github.com/Gikwayalily/Exercise1-thegym.git'
PS C:\Users\dotto\Exercise1-thegym> git push
Enumerating objects: 14, done.
Counting objects: 100% (14/14), done.
Delta compression using up to 8 threads
Compressing objects: 100% (7/7), done.
Writing objects: 100% (8/8), 985 bytes | 328.00 KiB/s, done.
Total 8 (delta 4), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (4/4), completed with 3 local objects.
To https://github.com/Gikwayalily/Exercise1-thegym.git
   07a63e4..f3daaf5  test -> test
PS C:\Users\dotto\Exercise1-thegym> git chechout -b main
git: 'chechout' is not a git command. See 'git --help'.

The most similar command is
        checkout
PS C:\Users\dotto\Exercise1-thegym> git chechout  main  
git: 'chechout' is not a git command. See 'git --help'.

The most similar command is
        checkout
PS C:\Users\dotto\Exercise1-thegym> git --help
usage: git [-v | --version] [-h | --help] [-C <path>] [-c <name>=<value>]
           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
           [-p | --paginate | -P | --no-pager] [--no-replace-objects] [--bare]
           [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]
           [--super-prefix=<path>] [--config-env=<name>=<envvar>]
           <command> [<args>]

These are common Git commands used in various situations:

start a working area (see also: git help tutorial)
   clone     Clone a repository into a new directory
   init      Create an empty Git repository or reinitialize an existing one

work on the current change (see also: git help everyday)
   add       Add file contents to the index
   mv        Move or rename a file, a directory, or a symlink
   restore   Restore working tree files
   rm        Remove files from the working tree and from the index

examine the history and state (see also: git help revisions)
   bisect    Use binary search to find the commit that introduced a bug
   diff      Show changes between commits, commit and working tree, etc
   grep      Print lines matching a pattern
   log       Show commit logs
   show      Show various types of objects
   status    Show the working tree status

grow, mark and tweak your common history
   branch    List, create, or delete branches
of the system.
PS C:\Users\dotto\Exercise1-thegym> git switch main
fatal: invalid reference: main
PS C:\Users\dotto\Exercise1-thegym> git switch -c  main
Switched to a new branch 'main'
PS C:\Users\dotto\Exercise1-thegym>