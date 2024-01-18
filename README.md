# rdr2-cache-clearer
A tiny solution to a problem I face

## I resolved this issue!

Turns out the problem was unrelated and this was just an elaborate and unnecessary solution. Disable full-screen optimization and switch to borderless window. I won't be privating this repo because it might help someone somwhere.

## What?
Lately I've been facing terrible stutters in red dead redemption 2. The internet didn't really help me resolve it except for one answer in particular. To delete all the pipeline cache files in `Documents/Rockstar Games/RDR2 folder/Settings/`. The game did have a small but unsatisfactory performance boost after that. However, the files kept coming back. I made this script and set it to launch alongside RDR2 so that it continuously clears the pipline cache.

## It doesn't work
Well, that's a bummer. This is a [reddit post](https://www.reddit.com/r/PCRedDead/comments/xf2klu/low_fps_in_rdr2_suddenly_for_no_reason/) that might help. Deleting `settings.xml` resets all of your settings, which might help if this started once you changed your settings.

~~## Building
For most of you who aren't familiar with programming, use the executable in the [releases tab](https://github.com/SuppliedOrange/rdr2-cache-clearer/releases). There's only one and it's labelled as a pre-release.
For others, `npm install` in the repository and running `node fixer.js` should be fine.~~
