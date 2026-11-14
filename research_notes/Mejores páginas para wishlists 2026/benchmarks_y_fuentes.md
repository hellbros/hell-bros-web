# Which traffic sources actually generate Steam wishlists for indie games: benchmarks, 2025-2026

Research date: 2026-11-01. Context: Hell Bros, a small Peruvian indie studio, with an unannounced Steam page for "Look Out: Indie Game" (asymmetrical online co-op 3D platformer, exactly 3 players).

Source quality labels used below:
- **[VALVE]** Valve's own documentation.
- **[VALVE-RELAYED]** Valve statements reported second-hand.
- **[MEASURED]** Data with a stated sample.
- **[ESTIMATE]** Third-party model, or an author's estimate.
- **[VENDOR-UNSOURCED]** Commercial blog with no dataset or methodology.
- **[OPINION]** Practitioner opinion.

Conflicts of interest:
- Chris Zukowski (How To Market A Game) sells a [course](https://howtomarketagame.com/blog/) and runs a [paid conference](https://howtomarketagame.com/inside/). His survey data is [reader-submitted and voluntary](https://howtomarketagame.com/2026/10/13/wishlist-inflation-is-real-but-they-are-still-important/).
- [Immutable](https://www.immutable.com/insights/steam-page-conversion-rate) sells Steam marketing and attribution services.
- [Steam Page Analyzer](https://www.steampageanalyzer.com/blog/how-to-get-steam-wishlists) sells page analysis tools.
- GameDiscoverCo figures are often [estimates, not Steam data](https://www.steampageanalyzer.com/blog/how-to-get-steam-wishlists).

## 1. What published data ranks wishlist sources (Steam vs. external, by channel)?

### Takeaway
No published dataset ranks wishlist sources by channel with a real sample. Steam's traffic report does not show conversions by source, so what exists is a patchwork: traffic-share data (visits, not wishlists), survey data on Next Fest, and single-game cases. The best-supported picture is that Steam's own surfaces deliver most of the volume once they are triggered, Next Fest and the new Personal Calendar are the largest repeatable events, and big external spikes (streamers, viral TikTok or Reddit) are real but rare and not reliably repeatable.

### Cited Findings

**Why a ranking is structurally hard to produce**
- [VALVE] Conversions (wishlists, purchases, activations) are only attributed through UTM links, only for logged-in users, and only if the wishlist happens within 72 hours of the click. Users who switch device or browser, or who later search in the Steam client, cannot be linked. Valve says social media in-app browsers make this especially hard — [Steamworks UTM Analytics](https://partner.steamgames.com/doc/marketing/utm_analytics)
- Steamworks' Traffic Breakdown does not show conversion by source; only UTM-tagged links do — [Steam Page Analyzer, 2026](https://www.steampageanalyzer.com/blog/steam-traffic-sources) (vendor, consistent with Valve's UTM doc)

**Steam internal vs. external share of visits (not wishlists)**
- [MEASURED, n=1, 2014] Defender's Quest, in a quiet month with no marketing: Home 35%, Discovery Queue 28%, Search 16%, Tags 9%, External 6%, Other 6%, so about 94% of visits came from inside Steam. An external Humble feature lifted External to 14% — [Lars Doucet data, via Steam Page Analyzer](https://www.steampageanalyzer.com/blog/steam-traffic-sources). Old, and predates the current store.
- [MEASURED, n=2, 2018/2021] Discovery Queue share of referral traffic for two unmarketed launches fell from 63% (2018) to 8% (2021), with tag browse pages taking the largest share of pre-launch impressions in 2021 — [Patrick Seibert/GameDiscoverCo, via Steam Page Analyzer](https://www.steampageanalyzer.com/blog/steam-traffic-sources)
- [MEASURED, tiers; Feb 2025] Discovery Queue in the 10 days after launch, as impressions and share of traffic: Bronze 22,000 (54%), Silver 126,000 (45%), Gold 250,000 (45%), Diamond 665,000 (32%) — [How To Market A Game benchmarks](https://howtomarketagame.com/benchmarks/). Sample size not stated on the page. Note the absolute count rises 30x from Bronze to Diamond while the share falls.
- [MEASURED, "dozens" of devs, Oct 2022] Games under roughly 12,500 weekly impressions showed mostly Direct Navigation, Other Pages and Bot Traffic. High search traffic tracked with streamer coverage — [Zukowski, via Steam Page Analyzer](https://www.steampageanalyzer.com/blog/steam-traffic-sources)
- [VENDOR-UNSOURCED, 2026] External sites send under 15% of visits unless the game is mid-press-cycle, per postmortems the author has seen (none named) — [Steam Page Analyzer](https://www.steampageanalyzer.com/blog/steam-traffic-sources)

**Next Fest (the best-measured wishlist source)**

Median wishlists earned during Steam Next Fest, Feb 2026, by wishlists held the day before the fest:

| Pre-fest wishlists | n | Median earned |
|---|---|---|
| 0-999 | 71 | 322 |
| 1,000-9,999 | 60 | 1,006 |
| 10,000-99,999 | 36 | 5,215 |
| 100,000+ | 7 | 12,882 |

[MEASURED, 182 responses, 170-174 games used in most charts, self-selected] — [How To Market A Game](https://howtomarketagame.com/2025/03/26/benchmarks-how-many-wishlists-can-i-get-from-steam-next-fest/)

Next Fest distribution across editions [MEASURED, survey; sample totals not stated]:

| Percentile | Jun 2024 | Oct 2024 | Feb 2025 | Feb 2026 |
|---|---|---|---|---|
| 30th | 384 | 420 | 584 | 382 |
| Median | 884 | 916 | 1,079 | 806 |
| 70th | 2,365 | 1,741 | 2,298 | 1,839 |
| 95th | 30,802 | 7,800 | 10,879 | 13,461 |
| Highest | 69,040 | 18,349 | 45,655 | 57,074 |

— [How To Market A Game, Apr 2026](https://howtomarketagame.com/2026/04/13/making-sense-of-the-february-2026-steam-next-fest/)

- [ESTIMATE, all entrants, Feb 2026] Across all 3,500+ demos the median was about 200 wishlists, and the top 5% about 7,000 (down from about 10,000) — [GameDiscoverCo, via Steam Page Analyzer](https://www.steampageanalyzer.com/blog/how-to-get-steam-wishlists). This is far below Zukowski's survey median of 806, because survey respondents self-select and the two samples differ.
- [MEASURED] Median demo conversion (played and wishlisted ÷ total players) was 16.33% — [How To Market A Game](https://howtomarketagame.com/2025/03/26/benchmarks-how-many-wishlists-can-i-get-from-steam-next-fest/)
- [MEASURED, weak effect] Demos launched well before the fest earned about 2.5x more wishlists, but the correlation is weak (r = -0.205) — [How To Market A Game](https://howtomarketagame.com/2025/03/26/benchmarks-how-many-wishlists-can-i-get-from-steam-next-fest/)
- [ESTIMATE/relayed] Pre-fest wishlist count vs. fest performance: Spearman r = 0.825 — [Zukowski, via Steam Page Analyzer](https://www.steampageanalyzer.com/blog/how-to-get-steam-wishlists). Sample not stated; not verified at the primary source.
- Zukowski's benchmark tiers for wishlists earned in Next Fest (Feb 2026): Bronze 0-999, Silver 1,000-6,999, Gold 7,000-9,999, Diamond 10,000+ — [How To Market A Game benchmarks](https://howtomarketagame.com/benchmarks/)

**Personal Calendar (new, possibly the largest algorithmic source)**
- [ESTIMATE, small sample] 300-3,000 wishlists per day, lasting up to 2 months before launch and 1 month after, versus about 1,000/day in the old Popular Upcoming — [How To Market A Game, Jun 2026](https://howtomarketagame.com/2026/06/25/how-the-steam-personal-calendar-affects-your-launch/). A later post reports one game averaging 831/day and 1,720/day in two stretches — [same search result, Part 2](https://howtomarketagame.com/2026/08/20/part-2-the-week-of-the-golden-age/) (figures seen in a search summary only; I could not read the full table text).
- [MEASURED, n=2] Click-through for two games was 0.81% and 1.56% on Popular Upcoming vs. 33.83% and 31.26% on Personal Calendar. Those games got fewer impressions on the calendar but many more visits — [How To Market A Game, Jun 2026](https://howtomarketagame.com/2026/06/25/how-the-steam-personal-calendar-affects-your-launch/) (figures via search summary; the page's full text was too large to read directly).

**Third-party festivals**
- [MEASURED, reach only] 470 third-party virtual festivals found; 31,285 unique games featured since 2020, about 31% of games released. Median appearances per featured game: 2. There is no per-festival wishlist data; the only claim is "100s, potentially 1000s of wishlists" — [How To Market A Game, Aug 2026](https://howtomarketagame.com/2026/08/11/the-state-of-virtual-3rd-party-festivals-2026/)
- Exposure does not equal sales: Lost Twins 2 appeared in 35+ festivals with 53 reviews — [same source](https://howtomarketagame.com/2026/08/11/the-state-of-virtual-3rd-party-festivals-2026/)

**External channels: single-game cases only**
- TikTok: Ship Shaper earned about 5,000 wishlists from viral TikToks around its announcement, then 11,566 during Next Fest — [How To Market A Game, Apr 2026](https://howtomarketagame.com/2026/04/13/making-sense-of-the-february-2026-steam-next-fest/)
- Streamer: Clair Obscur's demo gained 14,000+ net wishlists in one day via streamer Knekro — [Stream Hatchet using GameDiscoverCo estimates, via Steam Page Analyzer](https://www.steampageanalyzer.com/blog/how-to-get-steam-wishlists). This is a high-profile game, not an indie baseline.
- Reddit (2021): Song of Iron went from 52 to 13,702 wishlists in about 4 days from one post with 135,000 upvotes — [Steam Page Analyzer](https://www.steampageanalyzer.com/blog/how-to-get-steam-wishlists). Outlier case; 2021 Reddit conditions.
- Paid ads: about $1-2 per wishlist when well targeted (rule of thumb $1; This Grand Life 2 averaged $1.10), $3-4+ when poorly targeted — [Zukowski, Patrick Tang, via Steam Page Analyzer](https://www.steampageanalyzer.com/blog/how-to-get-steam-wishlists). The $3-4 figure has no source.
- Social posting: daily X posting yields about 30 wishlists a month — [Steam Page Analyzer](https://www.steampageanalyzer.com/blog/how-to-get-steam-wishlists) (publisher's own observation, unsourced).

**Claims that circulate but are weak**
- "About 90% of new wishlists come from festivals and streamers" — attributed to Zukowski in an [interview summary](https://www.steampageanalyzer.com/blog/how-to-get-steam-wishlists), not a dataset. Do not present it as measured.
- "68-88% of Next Fest wishlists come from people who never downloaded the demo" — [attributed to Zukowski](https://www.steampageanalyzer.com/blog/how-to-get-steam-wishlists) with no method stated. I did not find it in the [Next Fest benchmark post](https://howtomarketagame.com/2025/03/26/benchmarks-how-many-wishlists-can-i-get-from-steam-next-fest/), which does not report that metric.
- "TikTok 35%, Steam 25%, friends 25%, Twitch/YouTube 10%, own content 5%" — from [game-developers.org](https://game-developers.org/indie-game-steam-wishlists-sources). No named research, and the same page's infographic reportedly swaps YouTube and TikTok. Discard.

### Inferences
- Treat any "X% of wishlists come from channel Y" as unproven. The measurement can't support it: UTM misses device-switchers and in-app-browser users, which systematically undercounts TikTok and Instagram, and an external spike usually reappears as Steam-internal traffic and direct searches.
- The practical working model: external marketing is the trigger, Steam surfaces the multiplier.
- Next Fest results scale with what you bring in. A page with under 1,000 wishlists should expect hundreds, not thousands.

### Gaps
- No published cross-game dataset of wishlists by channel exists that I could find. GDC talks with this attribution were not located in this research pass.
- Stream Hatchet's and GameDiscoverCo's own pages were not opened; figures here are via secondary citations.
- I found no reliable data on Reddit, Discord or YouTube wishlist yield for 2025-2026, and no 2025-2026 first-party post-mortem with a channel split.

## 2. Current benchmarks

### Takeaway
Wishlist-to-sale has weakened: the current honest planning number is about 0.10-0.15x first-week sales per wishlist, not the 0.20-0.25x quoted from 2020 data. Launch tier targets are in the Zukowski table below. Visit-to-wishlist and capsule CTR have no authoritative public benchmark: treat 5-12% and 2-4% as vendor rules of thumb, not as measurements.

### Cited Findings

**Wishlists at launch, by outcome tier** (gross lifetime: Bronze $0-$10K, Silver $10K-$249K, Gold $250K-$999K, Diamond $1M+)
- [How To Market A Game benchmarks, updated Jun 2026](https://howtomarketagame.com/benchmarks/): Bronze 5,000; Silver 8,000; Gold 50,000; Diamond 90,000.
- Conflict: a vendor quotes Zukowski's launch tiers as Bronze <6,000, Silver 6,000, Gold 30,000, Diamond 150,000 — [Steam Page Analyzer](https://www.steampageanalyzer.com/blog/how-to-get-steam-wishlists). These are probably an older version. Prefer the live page.
- [VALVE] There is no minimum required wishlist count, and no formula to predict sales from wishlists — [Steamworks Wishlists](https://partner.steamgames.com/doc/marketing/wishlist)
- Zukowski's middle-tier guidance for Next Fest: 1,000 or fewer means marketing is struggling; 2,000-3,000 is typical of middle-tier games with decent streamer coverage; about 15,000 is top of the chart; 30,000-45,000 is a breakout hit, with 3-5 such games per fest — [How To Market A Game, Apr 2026](https://howtomarketagame.com/2026/04/13/making-sense-of-the-february-2026-steam-next-fest/) [OPINION based on survey data]

**Wishlists on Coming Soon page launch** (study dated Sept 2026 on the page)
- Bronze 23-68; Silver 79-441; Gold 134-1,575; Diamond 426-4,275 — [How To Market A Game benchmarks](https://howtomarketagame.com/benchmarks/). This one directly applies to Look Out's announcement.
- First 2 weeks live: Bronze 100; Silver 500; Gold 1,200; Diamond 7,000 — [Zukowski, via Steam Page Analyzer](https://www.steampageanalyzer.com/blog/how-to-get-steam-wishlists). Not found on the live benchmarks page; date unknown.

**Wishlist velocity**
- [MEASURED, 100+ games, one non-promotional week, Aug-Sept 2022] Median 23 wishlists per week, under 4 per day. By tier: Bronze 0-40; Silver 15-120; Gold 100-700; Diamond 300-3,000 per week — [How To Market A Game, 2022](https://howtomarketagame.com/2022/09/14/what-is-a-normal-click-through-rate-or-wishlist-rate-on-steam/). Note the 2022 date.
- [MEASURED] Wishlist deletes: Bronze 9%, Silver 12.7%, Gold 10.5%, Diamond 11.65% (Sept 2022) — [How To Market A Game benchmarks](https://howtomarketagame.com/benchmarks/)

**Wishlist-to-sale conversion**
- [MEASURED/ESTIMATE, GameDiscoverCo, Oct-Nov 2025; launches Sept 2024-Sept 2025] Games with 25,000+ wishlists: median 0.15x first-week sales per wishlist. Priced over $10: 0.10x. Excluding NSFW: about 0.14x — [GameDev Reports summary of GameDiscoverCo](https://gamedevreports.substack.com/p/gamediscoverco-the-state-of-steam). Sample size not stated. All first-week buyers are counted, including non-wishlisters, so this is a ratio, not true conversion.
- GameDiscoverCo found no long-term decline in conversion and attributes tougher results to competition for wishlists — [same source](https://gamedevreports.substack.com/p/gamediscoverco-the-state-of-steam). This conflicts with Zukowski (next item).
- [MEASURED, n=160, 34 games from 2020-22 vs. 126 from 2023-25; self-reported] A 2023-25 game sold about half as many first-month units per wishlist as a 2020-22 game — [How To Market A Game, Oct 2026](https://howtomarketagame.com/2026/10/13/wishlist-inflation-is-real-but-they-are-still-important/). Exact rates appear only in a chart.
- Older baseline, first-week conversion, June 2020: under 5,000 wishlists 15%; 5,000-39,999 20%; 40,000-99,999 23%; 100,000+ 25% — [Simon Carless, on How To Market A Game benchmarks](https://howtomarketagame.com/benchmarks/). **2020 data; do not use for planning.**
- Spread: co-op outliers Peak 29.29x, Mage Arena 8.67x, R.E.P.O. 7.51x — [GameDev Reports](https://gamedevreports.substack.com/p/gamediscoverco-the-state-of-steam). All three are co-op party games, the closest genre neighbors to Look Out.
- Underperformers vs. high performers: median first-7-day review score 67% vs. 91%; pre-release page time 411 days vs. 214 days — [GameDev Reports](https://gamedevreports.substack.com/p/gamediscoverco-the-state-of-steam)

**Visit-to-wishlist**
- [SURVEY, 2020] Average 10.8%, median 8.9% in an opt-in survey of the 2020 Steam Summer Festival — [Immutable](https://www.immutable.com/insights/steam-page-conversion-rate). No sample size given, and this is festival traffic.
- [VENDOR-UNSOURCED] Typical 5-10%, good about 10%, strong 12%+ — [Immutable](https://www.immutable.com/insights/steam-page-conversion-rate)
- [VENDOR-UNSOURCED, Mar 2026] Coming Soon median 8-12%; good 12-18%; Next Fest 15-25%. By source: Direct 15-25%, Search 10-20%, External 8-15%, Curators 5-15%, Sales 5-12%, Tags 4-10%, Discovery Queue 3-8%. The page says no sample size is published — [Steam Page Analyzer](https://www.steampageanalyzer.com/blog/steam-store-page-conversion-benchmarks)
- [VENDOR-UNSOURCED, conflict] The same vendor's traffic article says a median game converts visits to wishlists "in the low single digits" — [Steam Page Analyzer](https://www.steampageanalyzer.com/blog/steam-traffic-sources)
- Cases with visits and fest wishlists: Crashlands 2 (Jun 2024) 38,406 visits, 15,987 wishlists; How Many Dudes? (Feb 2026) 15,342 visits, 14,740 wishlists — [How To Market A Game](https://howtomarketagame.com/2026/04/13/making-sense-of-the-february-2026-steam-next-fest/)

**Capsule click-through rate**
- [VALVE, definition] CTR is page views ÷ capsule impressions, per [Zukowski's reading of Steam reports, 2022](https://howtomarketagame.com/2022/09/14/what-is-a-normal-click-through-rate-or-wishlist-rate-on-steam/). Valve publishes no platform average — [Immutable](https://www.immutable.com/insights/steam-page-conversion-rate)
- [VENDOR-UNSOURCED, Mar 2026] Below 2% poor; 2-4% average; 4-7% good; above 7% excellent — [Steam Page Analyzer](https://www.steampageanalyzer.com/blog/steam-ctr-benchmarks). No dataset.
- [MEASURED, festival] Top game 3.95%, average 0.61%, median 0.35% in a Steam festival — [How To Market A Game, via search summary](https://howtomarketagame.com/2022/09/14/) (exact post not confirmed; older). This is sharply lower than the vendor bands, because CTR depends on placement.
- [MEASURED, n=2, 2026] 0.81-1.56% on Popular Upcoming vs. 31-34% on Personal Calendar — [How To Market A Game](https://howtomarketagame.com/2026/06/25/how-the-steam-personal-calendar-affects-your-launch/)
- [OPINION] Zukowski advises against chasing CTR, since a high CTR can simply mean Steam is showing the game very little; impressions and page views are what matter — [How To Market A Game, 2022](https://howtomarketagame.com/2022/09/14/what-is-a-normal-click-through-rate-or-wishlist-rate-on-steam/)

### Inferences
- My arithmetic from the cases above: Crashlands 2 was about 42% wishlists per visit and How Many Dudes? about 96%. Those rates are not plausible as true page conversion. Wishlists can be added without a store-page visit, for example via hover stars, so a "visit-to-wishlist" rate computed from these reports overstates page persuasion during high-exposure events.
- My arithmetic: CTR in those two cases works out to about 0.6% and 2.4%, a useful sanity check that the vendor "2-4% average" is not universal.
- Blanket CTR benchmarks are close to meaningless because CTR varies by about 20-40x across Steam placements (my arithmetic from the Personal Calendar comparison above).
- Using 0.10-0.15x, 7,000 wishlists at launch implies only about 700-1,050 first-week sales, plus whatever organic demand exists. That is a plan for survival, not success, and it should be the framing for the team.

### Gaps
- No primary, sample-stated 2025-2026 visit-to-wishlist dataset was found. Steamworks data is private to each developer.
- GameDiscoverCo's sample size for the 0.15x study, and its figures for games priced at $10 or below, were not available. A figure of 0.17 (April 2024, games over 10,000 wishlists) and about 10.5% (about 420 launches) appeared in search summaries, but I could not trace them to a primary page, so they are excluded as findings.
- No velocity benchmark more recent than 2022 was found.
- No benchmark specific to co-op or fixed-party-size games was found.

## 3. How does Steam's discovery treat external traffic and wishlist velocity? Confirmed vs. folk wisdom

### Takeaway
Valve states in writing that store page traffic and page conversion rate are not visibility factors, and that wishlists are not a factor apart from "a few exceptions." So "send external traffic to please the algorithm" is false as stated: traffic helps only when it turns into purchases, play and wishlists from real accounts. However, the Personal Calendar now explicitly uses wishlists from similar players, so Valve's docs are in tension, and wishlists matter more than the older doc suggests.

### Cited Findings

**Confirmed by Valve in its documentation [VALVE]**
- "The traffic landing on your store page is not a factor in your Steam store visibility." Extra visits may help indirectly via sales — [Steamworks Visibility](https://partner.steamgames.com/doc/marketing/visibility)
- "The conversion rate of users landing on your store page and making a purchase is not a factor in visibility on Steam." — [same](https://partner.steamgames.com/doc/marketing/visibility)
- "With a few exceptions like the Popular Upcoming tab, wishlists are not a factor in your game's algorithmic visibility on Steam." — [same](https://partner.steamgames.com/doc/marketing/visibility)
- Exposure "will depend on how customers are responding to your product" through purchases, play and reviews — [same](https://partner.steamgames.com/doc/marketing/visibility)
- Valve advises spreading the word through "as many external channels" as possible — [same](https://partner.steamgames.com/doc/marketing/visibility)
- "Wishlists can be an important factor in determining where your game appears on Steam." The store is personalized by play history, friends' activity, followed curators, location and language — [Steamworks Wishlists](https://partner.steamgames.com/doc/marketing/wishlist)
- The Personal Calendar has no hard threshold, but more wishlists make appearance more likely, and Valve checks that they come from real accounts. It finds players with similar taste via games played, playtime and achievements, then surfaces games those players wishlisted. "There is no single, default calendar that everyone sees." Featuring is automatic — [Steamworks Personal Calendar](https://partner.steamgames.com/doc/marketing/visibility/personalcalendar)
- Wishlisters get an email or mobile push at launch, at Early Access exit, and at discounts of 20%+ — [Steamworks Wishlists](https://partner.steamgames.com/doc/marketing/wishlist)
- Demo notice: one notification to wishlisters, within two weeks of the demo's release — [same](https://partner.steamgames.com/doc/marketing/wishlist)
- Delaying by more than 24 hours once inside two weeks of launch removes the game from the Personal Calendar until it releases — [Steamworks Personal Calendar](https://partner.steamgames.com/doc/marketing/visibility/personalcalendar)

**Valve statements relayed second-hand [VALVE-RELAYED, Zukowski's notes from a 2023 Valve presentation; not a transcript]**

All from [Killing the myths behind Steam's visibility, Sept 2023](https://howtomarketagame.com/2023/09/04/killing-the-myths-behind-steams-visibility/):
- There is no single algorithm; featuring is a set of widgets, each with its own logic.
- Valve weighs only purchase-intent metrics. The author lists purchases, wishlists, play time, follows, consistently played tags, and friends' activity.
- Only two widgets look at wishlists: Popular Upcoming (most wishlists the week the game launches) and Discovery Queue (games gaining many wishlists in a short window, with traffic confirmed not to be used). This is the closest thing to a Valve confirmation of "velocity."
- No magic wishlist threshold triggers automatic featuring.
- No permanent "black mark" from a weak launch: "Steam doesn't make permanent decisions about your game."
- Review percentage is not scored as long as the game is Mixed or above (around 40%+). No algorithm evaluates the first 10 reviews.
- Localization was the only visibility factor Valve listed: translated games appear in more regions in widgets like New & Trending and Popular Upcoming.
- Early Access does not directly increase visibility.
- Short sales bursts are rewarded: Steam rewards spikes with more traffic.

Note the review claim is partly updated by the Personal Calendar doc: a game falling to Mostly Negative is [much less likely to be recommended](https://partner.steamgames.com/doc/marketing/visibility/personalcalendar).

**Theory, not confirmed**
- [OPINION] Valve introduced an ML visibility algorithm in October 2024, giving all games baseline visibility on Next Fest days 1-2. The Oct 2024 version was poorly tuned and later recalibrated. Zukowski labels this his own theory — [How To Market A Game, Apr 2026](https://howtomarketagame.com/2026/04/13/making-sense-of-the-february-2026-steam-next-fest/)
- [OPINION] Valve typically switches the fest algorithm on the first Wednesday, from baseline visibility to top performers; every game gets the same minimum through randomized front-page placement — [How To Market A Game, Oct 2026](https://howtomarketagame.com/2026/10/21/how-sloppy-is-the-october-2026-steam-next-fest/)
- [OPINION] A threshold of about 100 concurrent players has been suggested for being discovered by the algorithm — reported in [search summary of Zukowski commentary](https://presskit.gg/field-guides/how-to-build-steam-wishlist). Unverified.
- [OPINION] Wishlists matter because they produce launch-day revenue, which the algorithm weighs: 50,000 wishlists × 10% × $20 is about $100,000, which often triggers front page featuring — [Zukowski, 2023](https://howtomarketagame.com/2023/09/04/killing-the-myths-behind-steams-visibility/)

### Inferences
- There are two valid readings of "wishlists don't matter to the algorithm." Read narrowly, the wishlist count is not an input to most widgets. Read in practice, wishlists drive launch purchases, power the Personal Calendar's collaborative filtering, and affect the Discovery Queue. Valve's visibility page reads as older than its Personal Calendar page.
- External traffic is valuable only for the actions it produces from logged-in accounts. High-intent small audiences (a co-op or platformer community) beat large cold audiences.
- Page conversion rate is a business metric, not a ranking input. Improve the page because it makes wishlists, not to please Steam.

### Gaps
- Exact Discovery Queue logic, and Personal Calendar weights, are not public.
- I could not find a Valve primary statement defining "velocity" or any time window.
- The Valve 2023 talk itself was not located; only Zukowski's notes were read. The post links slides under a "devcom2023" URL.

## 4. What changed in 2025-2026

### Takeaway
Three things reshaped the funnel. Popular Upcoming effectively closed to indies (estimated threshold 7,000 to about 100,000), and the Personal Calendar replaced it with a personalized surface requiring a release date. Supply exploded, especially in Next Fest (7,240 demos in October 2026, 34.6% disclosing AI). And each wishlist is worth less, about half as many first-month units as in 2020-22, even though wishlists still predict launch sales well.

### Cited Findings

**Popular Upcoming and the Personal Calendar**
- Valve raised Popular Upcoming requirements from 7,000-ish to around 100,000 wishlists (~June 2026) — [Zukowski estimate, Jun 2026](https://howtomarketagame.com/2026/06/25/how-the-steam-personal-calendar-affects-your-launch/). The number is an estimate; [one report says](https://daddyskins.com/blog/counterpedia/steam-100000-wishlist-policy/) Valve has not confirmed it as a public rule. Valve's stated purpose was to "better capture the most anticipated releases of the coming month" — [via Zukowski](https://howtomarketagame.com/2026/06/25/how-the-steam-personal-calendar-affects-your-launch/)
- Conflicts: [tech-insider](https://tech-insider.org/steam-store-redesign-2026/) reports about 80,000 for this shelf, and [steamforecast](https://steamforecast.app/guides/steam-popular-upcoming-algorithm) still describes a 7K-10K floor. Both are less reliable than Zukowski.
- The change reportedly applied to new entries; games already in the feed were not immediately affected — [GAMES.GG, Jul 2026](https://games.gg/news/steam-popular-upcoming-indie-personal-calendar/)
- Early analysis says appearing in the Personal Calendar takes 8,000-30,000 wishlists — [Zukowski, via search summary and GAMES.GG](https://games.gg/news/steam-popular-upcoming-indie-personal-calendar/). This is an estimate, and Valve says there is [no hard threshold](https://partner.steamgames.com/doc/marketing/visibility/personalcalendar).
- The Personal Calendar first appeared in Steam Labs in October 2025 and left beta in late October 2026 — [GeekCulture](https://geekculture.co/steam-personal-calendar-feature-offers-personalised-game-recommendations/); [Noisy Pixel](https://noisypixel.net/steam-personal-calendar-permanent-store-feature/)
- Eligibility: a visible Coming Soon page with a **specific release date**. Valve suggests setting it at least 60 days out for the dedicated page (8-week view) and at least 3 weeks out for the front page (±2 weeks). Demos do not qualify — [Steamworks Personal Calendar](https://partner.steamgames.com/doc/marketing/visibility/personalcalendar)

**Store and wishlist features**
- Wishlist categories and gifting revamp, July 2026 — [GamingOnLinux](https://www.gamingonlinux.com/2026/07/valve-give-steam-wishlist-and-steam-gifts-a-major-needed-upgrade/)
- A Store Home redesign (reported June 4, 2026) with a rebuilt Discovery Queue, and an "October 2026 Discovery Update" with a near-endless personalized feed, are reported by [tech-insider](https://tech-insider.org/steam-store-redesign-2026/) and [tech-insider](https://tech-insider.org/steam-personalized-storefront-discoverability-2026/) only. I could not confirm either against a Valve post; treat as unverified.

**UTM and reporting**
- [VALVE] From April 22, 2025, UTM parameters on external links to Steam sale pages pass through to individual games on those pages. UTM can also be added to store widget iframes — [Steamworks UTM Analytics](https://partner.steamgames.com/doc/marketing/utm_analytics)
- [VALVE] Conversions finalize 4 days after the visit; demo downloads don't count for base-game links; playtest apps are not tracked — [same](https://partner.steamgames.com/doc/marketing/utm_analytics)

**Supply: release counts**
- [MEASURED, SteamDB] 18,452 releases in 2024; 21,268 in 2025, a record. Through Oct 1, 2026: 20,220 — [TheGamer, Oct 2026](https://www.thegamer.com/steam-most-games-released-end-of-october/). Figures like 19,000+ are [mid-December 2025 snapshots](https://x.com/SteamDB/status/1999420488271937702), not final.
- 48.6% of 2025 releases had fewer than 10 reviews (9,370 of a 19,267 snapshot) — [SteamDB, via search summary](https://www.pcguide.com/news/steam-breaks-another-record-for-annual-game-releases-but-almost-half-of-them-have-fewer-than-10-reviews/)
- Conflict on the 2026 total: TheGamer projects 21,376 by end of October using scheduled games only, while Zukowski projects [29,300 for 2026](https://howtomarketagame.com/2026/10/21/how-sloppy-is-the-october-2026-steam-next-fest/). (My note: TheGamer's figure only adds October's 1,156 scheduled titles; annualizing 20,220 over 9 months gives about 27,000, closer to Zukowski's.)
- Steam gross revenue 2025: about $16.9B per GameDiscoverCo, a record — [search summary, 80.lv](https://80.lv/articles/steam-earned-usd16b-in-2025-but-nearly-half-of-19-000-games-got-under-10-reviews)

**Next Fest saturation**
- 7,240 games in Oct 2026, up 65.2% from June 2026 (4,382). In 2026, Next Fest demos equal 51.7% of projected releases, up from 38.2% in 2025 — [How To Market A Game, Oct 2026](https://howtomarketagame.com/2026/10/21/how-sloppy-is-the-october-2026-steam-next-fest/)
- Feb 2026 had 3,500+ demos, up 19% from Oct 2025 and 51% year over year — [GameDiscoverCo, via Steam Page Analyzer](https://www.steampageanalyzer.com/blog/how-to-get-steam-wishlists)
- 34.6% (2,502 of 7,240) disclosed AI. Precision Platformers were the lowest genre at 15.3%, and only 8% of the Top 25 disclosed — [How To Market A Game, Oct 2026](https://howtomarketagame.com/2026/10/21/how-sloppy-is-the-october-2026-steam-next-fest/)
- Median followers the day before the fest: Top 25 had 5,519; ranks 26-50, 3,834; ranks 51-100, 1,605; everyone else (6,942 games), 15. Total followers correlated with peak demo concurrents at 0.55, while percentage follower gain was -0.13 — [same](https://howtomarketagame.com/2026/10/21/how-sloppy-is-the-october-2026-steam-next-fest/)
- Valve added a genre and sub-genre opt-in for developers registering for October 2026 Next Fest — [same](https://howtomarketagame.com/2026/10/21/how-sloppy-is-the-october-2026-steam-next-fest/)

**Co-op party games ("friendslop")**
- Concurrents: Lethal Company 197,000 launch day (Dec 2023); R.E.P.O. launch 281,000 total (Mar 2025); MECCHA CHAMELEON 350,000 across friendslop games — [How To Market A Game, Jul 2026](https://howtomarketagame.com/2026/07/30/is-friendslop-saturated/)
- Top titles take over 50% of players, then fall to about 10% within 3-9 months. Mage Arena: 624,000+ copies in a week, $3.70M net (GameDiscoverCo estimate) — [same](https://howtomarketagame.com/2026/07/30/is-friendslop-saturated/)
- [OPINION] Zukowski argues the genre is not saturated, because its "hungry" audience wants a new game every couple of months and tolerates jank. The chart covers 16 co-op party games, and the article does not cover how these games are discovered — [same](https://howtomarketagame.com/2026/07/30/is-friendslop-saturated/)

### Inferences
- A Coming Soon page without a date misses the calendar entirely, so setting a firm date at least 60 days out is now a marketing decision, not just a production one. Slipping it inside the last two weeks has a real cost.
- The old "get 7,000 wishlists for Popular Upcoming" target is obsolete. The newer practical target is the estimated 8,000-30,000 for the calendar, which also fits the Silver tier.
- A larger Next Fest dilutes the bottom (the 6,942 lower-ranked games had a median of 15 followers) more than the top. Arriving with existing followers matters more than ever.
- The genre outliers (Peak, Mage Arena, R.E.P.O.) suggest Look Out's genre can break wishlist math, but those are the survivors of a hit-driven category, and I found no data on the failure rate of co-op party games.

### Gaps
- Valve's own text on the Popular Upcoming change was not located; the quote is via Zukowski.
- Whether a 2026 Store redesign changed Discovery Queue mechanics could not be confirmed.
- No hard data on attention shifts (TikTok vs. YouTube vs. Twitch) for indie wishlists in 2025-2026 was found. Sensor Tower, VG Insights and Gamalytic were not reached in this pass.

## 5. Which common advice is contradicted by data?

### Takeaway
The most clearly contradicted claims are "drive traffic to boost the algorithm," "velocity beats total wishlists," "7,000 wishlists gets you Popular Upcoming," and "20% wishlist conversion." Advice that holds up: wishlists are still the best simple predictor, and a demo launched before the fest helps, though less than often claimed.

### Cited Findings

| Common advice | What the evidence says | Strength |
|---|---|---|
| External traffic boosts Steam's algorithm | Valve: store traffic and page conversion are [not visibility factors](https://partner.steamgames.com/doc/marketing/visibility) | Strong (Valve doc) |
| Wishlist velocity predicts better than total | R² log-log, 2023-25: total 0.72 vs. 30-day velocity 0.70; pooled 0.73 vs. 0.72, and total plus velocity only 0.75 — [n=160](https://howtomarketagame.com/2026/10/13/wishlist-inflation-is-real-but-they-are-still-important/) | Moderate (self-reported; about launch sales, not visibility) |
| Wishlists are worthless now | Spearman 0.87 (2023-25) with first-month units; predictive power held — [same](https://howtomarketagame.com/2026/10/13/wishlist-inflation-is-real-but-they-are-still-important/) | Moderate |
| Expect 20-25% of wishlists to buy in week one | 2020 figure. Now [0.10-0.15x](https://gamedevreports.substack.com/p/gamediscoverco-the-state-of-steam) for 25k+ wishlist games, and about half as many first-month units per wishlist as [2020-22](https://howtomarketagame.com/2026/10/13/wishlist-inflation-is-real-but-they-are-still-important/) | Strong on direction; magnitude disputed |
| 7,000 wishlists gets you Popular Upcoming | Threshold estimated [around 100,000](https://howtomarketagame.com/2026/06/25/how-the-steam-personal-calendar-affects-your-launch/) since about June 2026 | Strong on direction; number is an estimate |
| Everything in the algorithm depends on wishlists | Valve-relayed: [only two widgets](https://howtomarketagame.com/2023/09/04/killing-the-myths-behind-steams-visibility/) in 2023, now plus [Personal Calendar](https://partner.steamgames.com/doc/marketing/visibility/personalcalendar) | Moderate (older, relayed) |
| A weak launch permanently buries your game | Valve-relayed: [no permanent decisions](https://howtomarketagame.com/2023/09/04/killing-the-myths-behind-steams-visibility/) | Moderate; culture and word-of-mouth effects remain |
| The 10-review mark boosts visibility | Valve-relayed: [no algorithm evaluates it](https://howtomarketagame.com/2023/09/04/killing-the-myths-behind-steams-visibility/); only the visible icon changes | Moderate |
| Early Access gives extra visibility | Valve-relayed: [not directly](https://howtomarketagame.com/2023/09/04/killing-the-myths-behind-steams-visibility/) | Moderate |
| Next Fest will give you your audience | Median is [322 wishlists](https://howtomarketagame.com/2025/03/26/benchmarks-how-many-wishlists-can-i-get-from-steam-next-fest/) if you enter under 1,000, and about [200 across all entrants](https://www.steampageanalyzer.com/blog/how-to-get-steam-wishlists) | Strong |
| Launch the demo early for Next Fest | Direction supported (about 2.5x), but [r = -0.205 is weak](https://howtomarketagame.com/2025/03/26/benchmarks-how-many-wishlists-can-i-get-from-steam-next-fest/); all but one of the [10 Super Earners](https://howtomarketagame.com/2026/04/13/making-sense-of-the-february-2026-steam-next-fest/) launched about 1 month or more before | Moderate |
| Long page time before launch is always better | High performers averaged [214 days of pre-release](https://gamedevreports.substack.com/p/gamediscoverco-the-state-of-steam) vs. 411 for underperformers | Weak; correlational, likely reverse cause |
| More festivals means more sales | The most-featured games have many reviews, but [Lost Twins 2 had 35+ festivals and 53 reviews](https://howtomarketagame.com/2026/08/11/the-state-of-virtual-3rd-party-festivals-2026/); genre fit matters more | Weak (case, reviews as proxy) |
| Post daily on X | About [30 wishlists a month](https://www.steampageanalyzer.com/blog/how-to-get-steam-wishlists) | Weak (unsourced anecdote) |
| Optimize capsule CTR to a target | CTR varies [more than 20x by placement](https://howtomarketagame.com/2026/06/25/how-the-steam-personal-calendar-affects-your-launch/), and high CTR [may reflect low exposure](https://howtomarketagame.com/2022/09/14/what-is-a-normal-click-through-rate-or-wishlist-rate-on-steam/) | Moderate |

Zukowski's stated conclusion: wishlist inflation is real but "wishlists are still king" — [How To Market A Game, Oct 2026](https://howtomarketagame.com/2026/10/13/wishlist-inflation-is-real-but-they-are-still-important/). Proposed causes are hover-star wishlisting, wider festival exposure, and more devs chasing wishlists; these are his explanations, not measured.

### Inferences
- The inflation and "no decline" conflict between Zukowski and GameDiscoverCo may be partly a difference of scope: the former compares 2020-22 with 2023-25 on first-month units in a self-reported sample of 160, and the latter looks at 25k+ wishlist games over recent years. Neither can be treated as settled, but both give numbers below the 2020 baseline.
- For Hell Bros, planning should assume the low end, and should watch cohorts: wishlists from Next Fest may convert worse than those from a co-op audience (Zukowski suspects this, without data).
- Implications for "Look Out": set up UTM links per channel from announcement day, but read them as a floor; expect short-video traffic to be undercounted. Localization (es/en and more) is one of the few Valve-acknowledged levers. A fixed 3-player count may narrow the audience compared with flexible party games; the data here does not measure that.

### Gaps
- No data isolates how fixed party size (exactly 3 players) affects wishlists or conversion.
- The 160-game conversion rates appear only in charts, so exact values are unavailable.
- Whether festival-sourced wishlists convert worse than others has no published measurement.
