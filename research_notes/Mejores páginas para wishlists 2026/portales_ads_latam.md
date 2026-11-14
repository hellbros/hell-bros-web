# Portals, web demos, paid ads and Latin American channels as wishlist drivers (2025-2026)

Context: Hell Bros (small Peruvian indie, limited budget); unannounced Steam page for "Look Out: Indie Game", an asymmetrical online co-op 3D platformer for exactly 3 players; bilingual EN/ES website. Research date: 1 November 2026. Anything older than 2025 carries its year.

Evidence-quality note for the report writer: Most "benchmarks" in this topic come from vendors (marketing tools, localization agencies, creator platforms) who sell something related. Developer post-mortems with real spend are the strongest evidence and there are very few. No 2025-2026 source gives a controlled measurement for most portals.

## Portals and databases: which send measurable traffic to Steam?

### Takeaway
No published dataset shows itch.io, Newgrounds, Game Jolt, IndieDB, TIGSource or any upcoming-games aggregator as a meaningful wishlist source. The only measured data point found is one itch.io browser demo at roughly 3% of plays to wishlists (~150 wishlists, 2025), and that audience came mostly from niche communities around the demo, with Newgrounds and Game Jolt delivering almost nothing.

### Cited Findings
- Best measured case: an unnamed incremental game (post from around late May 2025) had ~6,500 views and ~5,300 browser plays on itch.io, with ~150 Steam wishlists attributed to the itch demo and associated links (~3% of plays) — [Reddit snapshot, u/Draelent_](https://reddit.sentinel-team.org/posts/1r359kv/snapshots/2026-02-13T08%3A10%3A21.68974Z)
- In that same case, most plays were driven by a niche genre portal (galaxy.click), IncrementalDB and Reddit posts; Newgrounds and Game Jolt delivered "only a couple hundred plays combined" — [same source](https://reddit.sentinel-team.org/posts/1r359kv/snapshots/2026-02-13T08%3A10%3A21.68974Z)
- A team tracking both platforms reported the relation of itch views to Steam wishlists was "not really coherent", while wishlist spikes came when a YouTuber played the game — [Gamblers Table devlog, itch.io](https://greenpixels.itch.io/gamblers-table/devlog/945763/wishlists-0-to-10000-in-just-three-weeks-) (attribution comes from a search summary; the devlog was not read in full)
- A 2026 publisher breakdown of wishlist sources does not mention portals at all: vertical-video influencers ~35%, Steam algorithms 25%, friends of people who already wishlisted 25% ("especially effective for cooperative projects"), Twitch/YouTube 10%, developers' own content 5%. These are one publisher's observations on LinkedIn, not an audited dataset — [WN Hub on Kirill Oreshkin, Polden Publishing, 2 Jun 2026](https://wnhub.io/news/stores-and-publishing/item-51014)
- A Game Jolt feature gave a boost on the Game Jolt and IndieDB pages, but no Steam numbers were reported — [Game Developer](https://www.gamedeveloper.com/business/when-free-exposure-goes-right-i-think-with-data-) (older article; date not checked)
- Newgrounds has no way to sell games, so it is only a free-demo or free-game venue — [itch.io blog post, developer's note](https://itch.io/blog/996886/daddy-say-my-name-is-now-on-newgrounds.amp)
- Measured comparison for itch.io versus other sources: a single devlog anecdote only (9 referred visits in a month, on itch itself) — [itch.io post](https://itch.io/post/17238510) (from search summary; the exact URL match to the claim is not confirmed)

### Inferences
- Treat these sites as free, low-effort listings and devlog mirrors, not as a wishlist strategy. Time spent should be capped, for example one afternoon of setup with UTM-tagged Steam links, then measured.
- The 2025 case suggests niche relevance matters more than portal size: the plays came from a genre-specific portal. For Look Out, the equivalent would be co-op and "friendslop"-type communities rather than general indie portals.
- itch.io is only useful for Look Out if there is something playable to post. Without a build, it would be a page with a trailer and little reason to exist.
- Steamworks UTM tracking is the way to generate Hell Bros' own evidence, because public evidence does not exist. Immutable notes Steam credits UTM conversions only within 72 hours of the click ([Immutable, 24 Sep 2026](https://www.immutable.com/guides/steam-ads)).

### Gaps
- No measured Steam traffic was found for IndieDB, TIGSource, Game Jolt, Newgrounds, GameDev.tv-style communities or GamesIndustry directories.
- No evidence at all was found for wishlist-focused sites and upcoming-game aggregators. The search did not surface any with published referral numbers.
- Current traffic levels and activity for TIGSource and IndieDB were not verified.

## Web and browser demo platforms: viable for a 3-player online game?

### Takeaway
No case study was found showing Steam wishlists from CrazyGames or Poki. CrazyGames is technically possible for a Unity game and does not demand exclusivity, but a demo that needs exactly 3 live players is structurally hard there, and I would not prioritize it without a bots or solo fallback.

### Cited Findings
- CrazyGames technical limits: 50 MB initial download, 250 MB total (50 MB without the SDK), 1,500 files maximum — [CrazyGames docs, requirements](https://docs.crazygames.com/requirements/intro/)
- CrazyGames supports Unity through its SDK, and recommends StreamingAssets and Addressables to cut initial download — [CrazyGames FAQ](https://docs.crazygames.com/faq/)
- Launch path: Basic Launch is a soft launch to a small segment of players with ads disabled and no monetization, evaluated on retention, playtime, CTR and conversion to gameplay. Full Launch comes only if the game is selected — [FAQ](https://docs.crazygames.com/faq/); [requirements](https://docs.crazygames.com/requirements/intro/)
- Basic Launch requires visual QA and PEGI 12 compliance — [requirements](https://docs.crazygames.com/requirements/intro/)
- CrazyGames hosts files only, not multiplayer servers ("No, we only host the game files"); the developer needs a solution such as Photon — [FAQ](https://docs.crazygames.com/faq/)
- Multiplayer landing-page eligibility needs handling the `IsInstantMultiplayer` flag (launching directly into multiplayer); other listed features include invite links, user room info and a disable-chat preference. CrazyGames marks these requirements as new and still gathering feedback — [CrazyGames multiplayer requirements](https://docs.crazygames.com/requirements/multiplayer-v2)
- Exclusivity is not required; publishing elsewhere does not affect revenue share, and CrazyGames calls itself a complementary channel — [FAQ](https://docs.crazygames.com/faq/)
- Ad revenue share is the main monetization; payout is monthly at a €100 minimum. No general revenue percentage appears in the docs I read — [FAQ](https://docs.crazygames.com/faq/)
- CrazyGames docs do not address Steam links, external promotion or demos on the pages read — [requirements](https://docs.crazygames.com/requirements/intro/); [FAQ](https://docs.crazygames.com/faq/)
- Poki access is gated. A third-party guide describes a Player Fit Test with a common benchmark of at least 125 of 500 players (25%) playing 3 minutes or more, followed by a Web Fit Test of about 3-5 days. This is not Poki's documentation — [Cinevva guide, 2026](https://app.cinevva.com/zh-CN/guides/publish-game-poki)
- Reach claims conflict: Poki at 30M users versus over 100M monthly players; CrazyGames at ~35M monthly users. None are verified — [Poki itch.io profile](https://itch.io/profile/pokigames); [Cinevva guide](https://app.cinevva.com/hi/guides/publish-web-game)
- An opinion piece warns that an unscoped browser demo hurts wishlists more than no browser demo. Its dating and authority are weak, so it is a caution rather than evidence — [GamineAI, May 2026](https://gamineai.com/blog/your-itch-browser-demo-is-not-free-marketing-stop-unscoped-html5-sku-2026)

### Inferences
- The 3-player requirement is the main obstacle. Web portal players arrive alone and leave fast, so a room that needs two more strangers at the same moment will often never fill. That risks failing the retention and "conversion to gameplay" metrics CrazyGames uses to decide progression. This is reasoning from the requirements above, not a measured result.
- Possible workarounds, none tested in any source: bots filling empty roles; a solo tutorial slice that teaches the asymmetry; or invite-link play where one friend shares a room link, which fits the portal's invite feature and the 25% "friends of wishlisters" pattern reported by Polden.
- Cost is real even at zero fees: a Unity WebGL 3D build under 50 MB initial load, plus Photon or equivalent netcode, plus chat moderation or disabling chat. For a small studio this competes directly with Steam demo and Next Fest preparation. A Steam demo or playtest has better-documented returns (covered by other researchers).
- Ranking for Look Out: Steam demo first; itch.io browser slice only if a WebGL build exists anyway; CrazyGames only as an experiment after that; Poki not recommended now.

### Gaps
- No wishlist data, click-through rate or case study was found for CrazyGames, Poki, or similar portals.
- Unknown: whether CrazyGames or Poki allow a Steam wishlist link or "wishlist" button inside a game. Docs read do not say; this should be asked directly or checked on the linked Advertisement and Quality pages.
- No case study of a 3-player-required game on any web portal was found.

## Paid ads: cost per wishlist, budgets, expert opinion, conversion

### Takeaway
Reported cost per wishlist clusters at about $1-3 on Reddit and Meta, but the best recent post-mortem has turned against it: on 31 Oct 2026 the Danchi Days developer reported that Reddit wishlists converted lower than other wishlist types and said Reddit ads are likely not worth it outside AAA or clear-niche games. For Hell Bros, ads before launch should be at most a small, tracked test ($200-500), not a growth plan.

### Cited Findings
Real spend cases:
- Danchi Days (Reddit only): ~$7,000 over 108 days (20 Dec 2025 to 7 Apr 2026); CPW $1.79-$1.94 headline, monthly $1.70-$2.25; 3,600-3,900 wishlists estimated, 3,000 UTM-tracked. Using UTM only, that is about $2.33 — [Melos Han-Tani, Buttondown](https://buttondown.com/melodicambient/archive/danchi-days-3600-wishlists-through-reddit-ads-was/)
- Post-launch edit on Danchi Days, dated 2026-10-31: "the conversion rate for reddit wishlists is quite low, much lower than I expected", lower than other types by cohort analysis; "reddit ads are likely not worth it unless you're making an AAA game" or a clear niche. No conversion numbers were published — [same source](https://buttondown.com/melodicambient/archive/danchi-days-3600-wishlists-through-reddit-ads-was/)
- Before launch, that author's ROI model: 4,000 wishlists at 15% conversion, $15 price, 60% net gave -$1,600 in year one without an organic multiplier, +$3,800 with a 2x assumption. He had said ads need a $15+ price, a clear Steam page and $500-1,000 minimum, and that games at $10 or less struggle to recoup — [same source](https://buttondown.com/melodicambient/archive/danchi-days-3600-wishlists-through-reddit-ads-was/)
- Danchi Days tactics: testing at about $10/day, scaling to $25-30/day then $50-100/day; Reddit account manager rule of about $1/day per 10,000 subscribers of the targeted community; subreddits with 200k-300k+ subscribers; CPC $0.12-$0.19 — [same source](https://buttondown.com/melodicambient/archive/danchi-days-3600-wishlists-through-reddit-ads-was/)
- This Grand Life 2 (2024): $4,365 mostly on Reddit, about 4,000 wishlists, $1.10 average ($0.80-$2.50 by ad group). Facebook was not properly tested and Twitter had terrible CTR. It reached Popular Upcoming at 5,228 total wishlists; no sales data in the article — [Game World Observer, 31 May 2024](https://gameworldobserver.com/2024/05/31/paid-ads-steam-wishlists-this-grand-life-2-case-study)

Benchmarks, weaker evidence:
- Paid social (Meta, TikTok, Reddit) ~$0.50-$2, a secondhand range; the page notes campaigns fall well outside it — [FindClout, 27 Sep 2026](https://findclout.com/blog/cost-per-wishlist-benchmarks)
- Social benchmarks roughly $0.30-$3; Google Ads "$25 or more per wishlist in 2026"; above $3 on Meta usually signals a creative or targeting problem. No TikTok figure. Immutable sells attribution tools — [Immutable, 24 Sep 2026](https://www.immutable.com/guides/steam-ads)
- Facebook/Instagram typically $1-$3; "Paid ads for wishlists are generally a bad investment for most indie games", with exceptions for retargeting, small event support, or high-price or strong genre fit — [Presskit.gg, Nov 2025, updated Oct 2026](https://presskit.gg/field-guides/how-to-build-steam-wishlist)
- Conflicting high estimate: Google $25-167, Meta $10-100, Reddit $17-300. These look calculated from unsourced CPC and conversion inputs, and Gamosy sells a competing creator service, so they deserve little weight next to real campaigns — [Gamosy, 10 Mar 2026](https://gamosy.com/blog/steam-wishlist-strategy)
- Zukowski's benchmark as reported: about $1 per wishlist, $1-2 acceptable (2022); a guide built on this suggests $200 as a test at $10-20/day over 2-3 weeks, only after the page converts organic traffic; stop above $3 — [Steam Page Analyzer](https://www.steampageanalyzer.com/blog/indie-game-marketing-1000-budget)
- Zukowski is quoted as saying the only thing he strongly recommends paying for is a capsule artist, with the rest mostly free and DIY — [Kymira blog](https://kymira.bearblog.dev/a-beginners-journey-through-indie-marketing/) (secondhand quote via search summary)

Conversion context:
- Median wishlist conversion: GameDiscoverCo reports 0.15x for games with 25,000+ launch wishlists in the prior year, falling to 0.10x above $10 — [GameDiscoverCo](https://newsletter.gamediscover.co/p/the-state-of-steam-wishlist-conversions) (figures from search summary; article not read in full)
- Claim that ad wishlists convert below organic: asserted without data by [Steam Page Analyzer](https://www.steampageanalyzer.com/blog/indie-game-marketing-1000-budget); supported qualitatively by the Danchi Days cohort note. Nobody has published a numeric paid versus organic conversion dataset.

### Inferences
- At $2 per wishlist and the Danchi Days assumptions (15% conversion, 60% net), a wishlist has to earn more than its cost. A $15 game nets about $1.35 per wishlist; a $10 game about $0.90. Ads lose money at face value at typical indie prices, and if Reddit wishlists convert worse, the gap widens. Calculated here, using the author's assumptions.
- Look Out's price is not known here, but co-op friend-group games tend to be cheap, and the Danchi Days author's warning about sub-$10 games would apply. A further consideration specific to co-op: only some of a trio's purchases may come from ads, but no data on this was found.
- The ad objective that might justify spend is reaching Steam's visibility thresholds at a specific moment (This Grand Life 2's Popular Upcoming case), not accumulating wishlists. That is one 2024 example.
- Suggested sensible limits for Hell Bros: no ads until the page has a trailer and demonstrated organic conversion; if tested, $200-500 on a US/UK/CA/AU Reddit or Meta campaign at $10-20/day around a demo or fest; stop at $3 CPW. LatAm-targeted ads would likely be cheap per click but monetize at lower regional prices; no data was found on this.
- The steep difference between $1.79-1.94 and $2.33 for the same campaign shows CPW depends on the denominator. Compare figures carefully.

### Gaps
- No measured, game-specific CPW was found for TikTok or YouTube ads in 2025-2026, and no clean Meta-only case study. Every Meta number is a secondhand range.
- No numeric conversion comparison exists publicly for paid versus organic wishlists. Danchi Days' author gave direction but not figures.
- Chris Zukowski's own 2025-2026 position on ads could not be retrieved directly.
- No case study of ads for a co-op or friend-group game was found.

## Latin America: audience, pricing, localization, creators

### Takeaway
Spanish and Brazilian Portuguese each hold about 4-5% of Steam by language, far behind English and Chinese but real. Spanish localization of the store page is cheap, and Hell Bros can already do it in-house; Simplified Chinese is the highest-value addition, Brazilian Portuguese the next. Reliable LatAm Steam revenue data and a verified list of co-op streamers in the region were not found.

### Cited Findings
Audience size:
- Valve account data, full year 2024 (presented at GDC 2025, reported secondhand): Simplified Chinese 33.7%, English 33.5%, Russian 8.2%, Spanish 4.6%, Portuguese-Brazil 2.8% — [Steam Page Analyzer](https://www.steampageanalyzer.com/blog/steam-localization-languages)
- Steam survey snapshots: January 2026 English 37.01%, Simplified Chinese 23.86%, Spanish-Spain 4.22%, Portuguese-Brazil 3.92%; June 2026 English 38.2%, Simplified Chinese 24.2%, Spanish-Spain 4.6%, Portuguese-Brazil 4% — [Steam Page Analyzer](https://www.steampageanalyzer.com/blog/steam-localization-languages)
- Monthly survey data is unstable: Simplified Chinese hit 54.60% in February 2026 in a sampling anomaly — [same source](https://www.steampageanalyzer.com/blog/steam-localization-languages); September 2026 saw another Chinese rise that GamingOnLinux flagged as possibly a data issue — [GamingOnLinux, Oct 2026](https://www.gamingonlinux.com/2026/10/steam-survey-for-september-2026-shows-a-drop-in-linux-with-simplified-chinese-rising/)
- Regional all-platform market: Newzoo projected 372.3M players and $8.3B revenue in LatAm for 2025, $48.5 spend per player, not PC-specific — [GamesBeat](https://gamesbeat.com/?p=320213)

Regional pricing:
- Peru (PEN), Brazil (BRL), Mexico (MXN), Chile (CLP, 100-increment rule) and Colombia (COP, same rule) are live Steam currencies — [Steamworks currencies](https://partner.steamgames.com/doc/store/pricing/currencies)
- USD_LATAM is a recommended discounted USD tier for Belize, El Salvador, Guatemala, Honduras, Nicaragua, Panama, Argentina, Bolivia, Ecuador, Guyana, Paraguay, Suriname and Venezuela — [Steamworks currencies](https://partner.steamgames.com/doc/store/pricing/currencies)
- If a developer enters no LATAM-USD price, US pricing is used by default, so the regional price needs to be set deliberately — [Steam Support](https://help.steampowered.com/faqs/view/2720-4EC7-B95A-1D2A) (from search summary)
- A March 2026 article reports developers can now choose among three price conversion methods; I did not verify this at Valve — [Generación Xbox](https://en.generacionxbox.com/steam-changes-its-regional-prices-and-opens-the-door-to-cheaper-games-in-latin-america-we-explain-it-to-you/)

Localization:
- Oldest but most-cited data (2021, Hooded Horse, small undisclosed sample): slightly over half of Spanish wishlists were attributed to localization, about a 100%+ lift; East Asian languages over 90%; French/German 35-40%. Portuguese and Chinese were not reported separately for wishlists — [GameDiscoverCo, 23 Jun 2021](https://newsletter.gamediscover.co/p/game-localization-for-discovery-its)
- Separate 2021 figure: Chinese localization raised one publisher catalog's China unit share from 5% or less to 20% or more; cheaper pricing and higher refunds complicate that — [GameDiscoverCo, 2021](https://newsletter.gamediscover.co/p/game-localization-for-discovery-its)
- Costs: store page $100-300 per language (500-1,000 words); full text-light game $500-2,000 per language; text-heavy $5,000-20,000+ — [Steam Page Analyzer](https://www.steampageanalyzer.com/blog/steam-localization-languages)
- Priority advice from the same guide: Simplified Chinese, Japanese, Korean first; Brazilian Portuguese, Russian, Spanish, Turkish second. Start with one language if budget is tight, and use native speakers for CJK — [same source](https://www.steampageanalyzer.com/blog/steam-localization-languages)
- Alconost (July 2026) recommends two or three languages, including Brazilian Portuguese if there is any signal, and using per-country wishlist data to decide; Spain and LatAm variants can differ enough to need separate treatment. Alconost sells localization, and its "27% Chinese / 36% English" figures have no stated source — [Alconost](https://alconost.com/en/blog/steam-language-mix-indies)

Communities and creators:
- Spanish-language co-op communities exist, for example a "R.E.P.O ESPAÑOL" Discord aimed at Spain and LatAm players — [Discord Bot List](https://discordbotlist.com/servers/r-e-p-o-hispanohablante-oficial-1350883097478168777/upvote)
- devINITIVE is a Spanish-language indie showcase with a co-streamer network; the 2026 show aired 16 Sep and received over 250 trailers — [Oxo Museo](https://oxomuseomadrid.com/en/?p=9759)

### Inferences
- Spanish on the store page and in the game is a low-cost win because the team writes it natively, and it opens both LatAm and Spain. Which Spanish variant the Steam store uses should be decided deliberately (Steam distinguishes Spanish-Spain and Spanish-Latin America).
- Language choice for a 3-player game: a trio needs all three to buy, so friend groups in lower-priced regions add unit volume, but at lower per-unit revenue. Regional price sets should be reviewed with this in mind. No data on this was found.
- Suggested order for Look Out: EN + ES (already), then Simplified Chinese and Brazilian Portuguese store pages (about $200-600 total at the quoted rates), then in-game text if wishlists from those countries appear. An asymmetric platformer with little text is likely in the $500-2,000 per language range.
- Chinese matters beyond the survey noise, but a China strategy also involves creators and community platforms not examined here (and server or latency considerations for online co-op).
- Online co-op latency across continents may limit how much a regional audience can play with others; this should be tested because regional matchmaking can also split a small 3-player pool.

### Gaps
- The share of "Spanish - Latin America" on Steam was not retrieved: sources quote "Spanish" or "Spanish-Spain" only. Check Valve's survey page directly at store.steampowered.com/hwsurvey.
- October 2026 survey language data was not found.
- No current Steam revenue or user share by LatAm country was found. Newzoo's detail is paid, and country numbers found are 2023 all-platform figures.
- No regional wishlist-to-purchase conversion data for LatAm was found.
- No verified list of LatAm streamers known for co-op indie games was found. Two targeted searches returned nothing that links named creators (TheGrefg, Rubius, Fernanfloo, Vegetta, Auronplay, Ibai) to R.E.P.O., PEAK or Lethal Company. No names should be presented as confirmed. Hell Bros can build this list directly, using tools such as Twitch/YouTube searches of those games in Spanish.
- No 2025-2026 Spanish-language press data on wishlist impact was found.

## Peru and LatAm support: festivals, showcases, funds, associations

### Takeaway
The clear open opportunity is BIG Festival at gamescom latam (free, deadline 15 January 2027, with a "Best Game: Latin America" award and Best Multiplayer category). The Peruvian Ministry of Culture contest is the only national cash source found (up to S/ 200,000 for production in 2025), but its 2026 round closed on 31 July 2026, so the next realistic window is mid-2027.

### Cited Findings
Open now:
- gamescom latam BIG Festival 2027: free entry, open since 16 Oct 2026, closes 15 Jan 2027 at 9:59 p.m. EST; event 22-25 Apr 2027, Distrito Anhembi, São Paulo. International indie studios eligible. Categories include Best Multiplayer, Best Gameplay, and Best Game: Latin America; selected games are exhibited at no cost — [Gamespress release](https://www.gamespress.com/gamescom-latam-2027-opens-call-for-speakers-alongside-BIG-Festivals-fr)
- 2026 edition received a record 966 submissions from 75 countries — [GamesBeat](https://gamesbeat.com/?p=336923)
- The Fun, The Dark, and The Cozy 2027: deadline 15 Nov 2026, free, global call from the Mexican Entertainment System team, February festival candidate; listing notes it is their second global call. A follow-up search found no independent confirmation — [How To Market A Game festivals](https://howtomarketagame.com/festivals/)

Past deadlines useful for planning 2027 (all free unless noted) — [How To Market A Game festivals](https://howtomarketagame.com/festivals/):
- Latin American Games Showcase: 18 Mar 2026 (Gamescom edition) and 8 Apr 2026 (Summer Game Fest edition), organized around lagshowcase.com, with Steam pages
- Game Effect Showcase (games by Spanish speakers, YouTube plus Steam event): 31 Mar 2026
- CO-OPALOOZA (co-op games): 17 Apr 2026, August festival
- EVA Play and LATAM Games Festival on Steam: 17 Aug 2026, October festival
- ZNT Horizon (Brazil, LATAM, SE Asia studios): 3 Jul 2026
- Four is a Party (multiplayer, Daedalic): 7 Sep 2026, December festival
- La Indie Dev Argentina Expo and GameSpain Direct are limited to Argentine and Spanish games respectively

Events and context:
- EVA 2026 (24th edition): 21-24 Oct 2026 at Palacio Libertad, Buenos Aires; organized by ADVA; EVA Play shows 100+ locally developed games, and it includes business rounds and EVA Awards — [PocketGamer.biz](https://www.pocketgamer.biz/events/eva-game-expo-2026/). EVA Play's eligibility for non-Argentine games is not confirmed.
- Latin American Games Showcase aired 4 June 2026 at Summer Game Fest, and had a Game Awards edition in December 2025 with 50+ titles and a Steam event from 9-18 December 2025 — [Gematsu](https://www.gematsu.com/event/latin-american-games-showcase-summer-game-fest-2026-edition); [Cultura Geek](https://culturageek.com.ar/todo-lo-que-mostro-la-la-latin-american-games-showcase-cerro-su-edicion-the-game-awards-2025/)
- devINITIVE Showcase 2026: 16 Sep 2026; Spanish and LatAm indie focus — [Game Developer press release](https://www.gamedeveloper.com/press-release/devinitive-showcase-returns-bigger-more-international-and-more-ambitious-in-its-2026-edition)
- SOFA 2026 in Colombia had 28 Latin American games competing for player votes — [Publimetro](https://www.publimetro.co/tecnologia/2026/10/06/sofa-2026-gamers-podran-probar-28-videojuegos-latinoamericanos-y-elegir-el-mejor-de-la-edicion/)
- Google Play Indie Games Fund LatAm 2025 funded 10 studios with about $2M, but this is a mobile program — [Google](https://blog.google/products/google-play/indie-games-fund-latin-america-2025/?hl=pt)

Peru:
- 2026 "Concurso de desarrollo de videojuegos" is listed as closed, with applications ending 31 Jul 2026 — [Estímulos Económicos 2026 portal](https://estimuloseconomicos.cultura.gob.pe/2026/estimulos-economicos-para-la-actividad-cinematografica-y-audiovisual-2026)
- 2025 rules: total up to S/ 520,000; Preproduction up to S/ 60,000; Production up to S/ 200,000 (starts from a prototype or vertical slice, reaches at least an alpha, two-year maximum execution) — [Bases 2025, DGIA](https://transparencia.cultura.gob.pe/sites/default/files/transparencia/2025/06/resoluciones-directorales/resoluciondirectoral-000495-2025-dgia-vmpcic-anexo7videojuegosff.pdf)
- 2025 applicants must be legal entities constituted in Peru, with SUNARP registration, active RUC, and registration in RENCA; the RENCA request deadline was 15 Jul 2025, ahead of the 5 Aug 2025 close — [Bases 2025](https://transparencia.cultura.gob.pe/sites/default/files/transparencia/2025/06/resoluciones-directorales/resoluciondirectoral-000495-2025-dgia-vmpcic-anexo7videojuegosff.pdf)
- 2025 calendar: call 30 Jun, beneficiaries 18 Nov. Part of the fund is reserved for regions outside Lima and Callao, and the jury scores "strategy for dissemination and distribution based on a well-identified audience" — [Bases 2025](https://transparencia.cultura.gob.pe/sites/default/files/transparencia/2025/06/resoluciones-directorales/resoluciondirectoral-000495-2025-dgia-vmpcic-anexo7videojuegosff.pdf)
- The ministry says it has run video game contests since 2018 — [gob.pe](https://www.gob.pe/institucion/cultura/noticias/1009384-ministerio-de-cultura-otorgara-estimulos-economicos-a-4-proyectos-de-videojuegos-peruanos-y-21-de-especializacion-profesional)
- May 2025: Ministry of Culture and CVA Perú ran a Patrimonio Game Jam on UNESCO-recognized cultural practices — [Panamericana](https://panamericana.pe/tecnologia/443683-lanzan-concurso-crear-videojuegos-basados-patrimonio-peruano)
- IGDA Perú is the local developer association identified in sources — [Gestión](https://gestion.pe/tecnologia/dia-del-gamer-caracteristicas-y-desafios-de-los-desarrolladores-peruanos-de-videojuegos-noticia/)

### Inferences
- Apply to BIG Festival now: it costs nothing, and Latin American and multiplayer categories fit the game. But 966 submissions means low odds, and finalists benefit mostly from press and business exposure; a wishlist effect from BIG is not measured.
- Submission requires something showable. Many showcases expect a public or playable build, so the unannounced status needs to end before these deadlines. The 15 Nov deadline for The Fun, The Dark, and The Cozy is two weeks away; only worthwhile if a trailer and Steam page are ready, and the listing should be verified at the application form first.
- Rough dollar conversion (assumed S/ 3.4-3.7 per USD, not sourced; check the current rate): S/ 200,000 is about $54,000-59,000; S/ 60,000 is about $16,000-18,000.
- Preparing for the 2027 contest: register in RENCA early, as the 2025 deadline came three weeks before application closing. If rules resemble 2025, Hell Bros needs to be a Peruvian company, not an individual, and the "difusión y distribución" criterion rewards having audience data, which this wishlist work would provide. Whether 2027 follows the same rules is unknown.
- The 2026 round rests on Ley 32309 and its regulation, while the 2025 bases cite Decreto de Urgencia 022-2019, so 2025 rules should not be assumed to carry over unchanged ([resolution 001287-2026](https://estimuloseconomicos.cultura.gob.pe/sites/default/files/concursos/archivos/doc-3/2026-CPC-OP-Aptos.pdf)).

### Gaps
- 2026 amounts and rules for the video game contest were not confirmed (the 2025 bases were read; the 2026 ones were not). Whether marketing costs are eligible was not established in the sections read.
- No 2027 calendar was found for Peru, LAGS, EVA Play, CO-OPALOOZA, Game Effect or devINITIVE. A December 2026 LAGS edition and its terms were not confirmed.
- EVA Play eligibility for Peruvian games is unverified, as is LAGS eligibility details and whether any fee or sponsorship applies beyond the listing's "free".
- No verified Colombia or Chile showcase call open to Peruvian studios was found. Chile's Fondos de Cultura has a video game line, but it appears to be for Chilean applicants ([example document](https://www.fondosdecultura.cl/wp-content/uploads/2026/07/Rex2214-Videojuegos.pdf), not read).
- No PROMPERÚ or other trade-promotion program for Peruvian game studios was verified in this round.
- No measured wishlist results from any LatAm showcase were found.

## Other discovery sites: Discord, looking-for-group communities, newsletters

### Takeaway
There is no measured wishlist data for co-op Discord servers, LFG communities or indie newsletters. They are mostly useful for finding playtesters and trios, and Co-Optimus plus r/CoOpGaming are the most targeted English-language options found.

### Cited Findings
- Co-Optimus runs a Steam curator store for co-op recommendations and a Steam group for finding co-op partners — [Co-Optimus](https://www.co-optimus.com/article/12293/steam-launches-curator-stores-follow-ours-for-co-op-recommendations.html) (older article; current activity unverified)
- r/CoOpGaming hosts regular "Looking for Co-op Partners" posts, some with Discord invites — [mirror of r/CoOpGaming](https://lr.in.psf.lt/r/CoOpGaming)
- Fix Gaming Channel publishes upcoming co-op game lists (15 upcoming co-op games for late 2026 and 2027) and a free newsletter — [Fix Gaming Channel](https://www.fixgamingchannel.com/tag/upcoming-co-op-games/)
- MyIndieWishlist is a Steam group of about 4,400 online members focused on hidden indie gems — [Steam group](https://steamcommunity.com/groups/MyIndieWishlist) (figures from a search summary, unverified)
- Unofficial Steam co-op groups are often small or inactive, per one forum user — [TechEnclave](https://techenclave.com/t/does-techenclave-have-a-steam-or-a-discord-group/259724) (anecdote)
- Friends of people who already wishlisted account for about 25% of wishlists, especially for co-op, per one publisher — [WN Hub](https://wnhub.io/news/stores-and-publishing/item-51014)
- For scale, a GameDiscoverCo post-mortem reported that modest organic traction on Reddit meant 30-40 extra wishlists a day for a few days, then back to baseline. It is cited secondhand and is not co-op-specific — [Steam Page Analyzer](https://www.steampageanalyzer.com/blog/reddit-indie-game-marketing)

### Inferences
- Exactly-3-player games have a specific need that general co-op games do not: a trio. LFG channels can be used to recruit for playtests and demo sessions, which is also a measurable, cheap activity.
- A "bring two friends" invitation is the strongest social mechanic found, in line with the 25% friends figure, though that figure is one publisher's estimate. The Steam page and any demo should make inviting easy.
- Hell Bros' own Discord may become the LFG hub for players without a trio. This is especially relevant to a 3-player game, but no case data was found on it.

### Gaps
- No measured Steam traffic exists publicly for Co-Optimus, r/CoOpGaming, or co-op Discords.
- No large Spanish-language co-op LFG community was verified beyond single-game servers.
- No indie player newsletter with published click or wishlist results was found. Membership and reach numbers for all communities are unverified.
