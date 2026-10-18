# Team site (GitHub Pages + Jekyll)

Lineups, scores, scorers and assists for every game, plus a home page of links for your players.
Everything is plain files: edit markdown, commit, and GitHub rebuilds the site in about a minute.

## Set it up (once)
1. Create a GitHub repository and upload everything in this folder.
2. Repo **Settings → Pages**: Source = *Deploy from a branch*, Branch = `main`, folder `/ (root)`.
3. Open `_config.yml` and set `title`, `team_name`, `tagline`.
   - Project site (`https://USER.github.io/REPO/`): set `baseurl: "/REPO"`.
   - Custom domain or `USER.github.io` repo: leave `baseurl: ""`.
4. Replace the sample players in `_data/roster.yml` with your real roster (name + jersey number).

## Add a game
Copy `_templates/game-template.md` into `_games/` and name it `YYYY-MM-DD-opponent.md`.
Fill in the date, opponent, formation and lineup. Set `status: upcoming`.

## Track the score during a game
1. Change `status: upcoming` to `status: live`.
2. Each time a goal is scored, add one line under `goals:` (create the list if it isn't there):
   - ours: `- {minute: 12, scorer: Player H, assist: Player E}`
   - theirs: `- {minute: 33, team: them}`
3. Commit. The score is counted for you. The game page refreshes itself every minute while the game is `live`.
4. At full time set `status: final`. It now counts in the record and season leaders.

Prefer not to log every goal? Skip `goals:` and use `final_score: {us: 3, them: 1}` instead.
(You can edit files from the GitHub website or the GitHub mobile app.)

## Other things you can change
| What | Where |
|---|---|
| Home page link cards | `_data/links.yml` |
| Formations (positions on the pitch) | `_data/formations.yml` |
| Team logo | put an image in `assets/img/`, set `logo: /assets/img/your-file.png` in `_config.yml` |
| Colours and look | `assets/css/site.css` |

## Preview on your computer (optional)
`bundle install` then `bundle exec jekyll serve`, and open http://localhost:4000 (add your `baseurl` if you set one).
