---
# HOW TO USE: copy this file into the _games folder and rename it  YYYY-MM-DD-opponent.md
# (for example  2026-11-01-lakeshore.md ). Then fill it in. Anything after the second
# line of dashes at the bottom is an optional match report, written in normal markdown.

date: 2026-11-01            # YYYY-MM-DD
opponent: Opponent Name
home: true                  # false for an away game (shows as "@ Opponent")
location: Field name
time: "10:00 AM"            # keep the quotes
status: upcoming            # upcoming  ->  live (during the game)  ->  final

formation: "3-2-3"          # must match a name in _data/formations.yml (keep the quotes)

# LINEUP: one line per position in that formation.
#   POSITION: Starter, 1st sub, 2nd sub
# Subs are optional. Names must match _data/roster.yml.
lineup:
  GK: Player A, Player J
  LB: Player B
  CB: Player C
  RB: Player D
  LCM: Player E
  RCM: Player F
  LW: Player G
  ST: Player H
  RW: Player I

# Players not assigned to a position (optional)
bench: Player P, Player Q

# GOALS: add a line each time someone scores. The score is counted automatically.
#   our goal:       - {minute: 12, scorer: Player H, assist: Player E}
#   no assist:      - {minute: 20, scorer: Player G}
#   their goal:     - {minute: 33, team: them}
#   extra detail:   - {minute: 41, scorer: Player I, note: penalty}
# Leave the list out (delete the "goals:" line) until the first goal.
# goals:
#   - {minute: 12, scorer: Player H, assist: Player E}

# OPTIONAL: if you don't want to log every goal, set the final score by hand instead.
# Our goals first. (If goals are listed too, the two should agree.)
# final_score: {us: 3, them: 1}
---
Optional match report goes here.
