// Roadside Spottings — car data
// Each entry: image file (in images/), year/make/model, fun description,
// units made, rarity (1-10, 10=rarest), horsepower, top speed, engine.
// Entries marked guess:true are Andy's-dad-and-Claude's best guesses where
// the car couldn't be identified with full certainty from the photo.

const CARS = [
{file:"E38FF13B-730B-443D-A693-D75854A65116.jpg", year:"1967", make:"Ford", model:"Mustang Fastback", guess:true,
 blurb:"A first-generation Mustang fastback cruising the coast highway — the shape that launched the whole 'pony car' craze. The scooped sides and fastback roofline say 1967-68, but the exact engine under the hood is a mystery from a moving photo.",
 units:"≈472,000 Mustangs built for 1967 (all body styles)", rarity:5, hp:"225–320 hp (289–390 V8 options)", top:"≈113–120 mph", engine:"4.7L–6.4L V8"},

{file:"F821B723-B637-41D4-AEB5-4483D5DEA7F3.jpg", year:"1963", make:"Ford", model:"Galaxie 500", guess:true,
 blurb:"A cream-colored full-size Ford cruiser with that classic boxy '60s Detroit look. Galaxies came with everything from mild family-car V8s to the fire-breathing 427 — no way to tell which this one has just from the road.",
 units:"≈340,000 Galaxie 500s sold in 1963", rarity:5, hp:"220–425 hp depending on engine", top:"≈110–130 mph", engine:"5.8L–7.0L V8"},

{file:"70ED0CC2-0319-40A4-AA72-C1F30E0B0E0E.jpg", year:"1970", make:"Chevrolet", model:"Chevelle SS Convertible", guess:false,
 blurb:"A black 1970 Chevelle SS convertible with white racing stripes — one of the most desirable muscle car convertibles ever built. If it's packing the legendary LS6 454, it was one of the most powerful muscle cars of its era.",
 units:"Only a few thousand SS convertibles built for 1970", rarity:8, hp:"350–450 hp (396 or 454 V8)", top:"≈120–130 mph", engine:"6.6L–7.4L V8"},

{file:"087D553A-550E-488F-8366-B72BDF55F49D.jpg", year:"1971", make:"Chevrolet", model:"Chevelle Malibu", guess:true,
 blurb:"A gold Chevelle rolling without the SS stripes — a plain-clothes muscle car. Just as fast underneath if it's got a big V8, but flying under the radar.",
 units:"≈348,000 Chevelles built in 1971 (all trims)", rarity:4, hp:"≈200–245 hp (307–350 V8)", top:"≈105–115 mph", engine:"5.0L–5.7L V8"},

{file:"3C3C5EB4-82D3-4553-B41D-B594B7033B43.jpg", year:"1969", make:"Chevrolet", model:"C10 Pickup", guess:true,
 blurb:"A dark, low-riding classic Chevy pickup — the second-generation C10, nicknamed the 'Action Line' truck. Simple, tough, and still a common sight at classic car cruises today.",
 units:"Chevy sold several hundred thousand C/K trucks per year in this era", rarity:3, hp:"155–255 hp (I6 or V8 options)", top:"≈95–105 mph", engine:"4.1L–6.5L I6/V8"},

{file:"C94FBA0A-BA0A-441B-BD9C-F5728F122AC7.jpg", year:"1955", make:"Chevrolet", model:"Bel Air", guess:false,
 blurb:"A black 1955 Bel Air — the first of the legendary 'Tri-Five' Chevys (1955-57), famous for introducing Chevy's small-block V8. Any car show worth its salt has at least one of these.",
 units:"≈1.7 million 1955 Chevys built (all trims)", rarity:6, hp:"123–180 hp (235 I6 or 265 V8)", top:"≈100 mph", engine:"3.9L–4.3L I6/V8"},

{file:"42E74D1A-23BF-4BAE-8622-E8FEBD4A7CD9.jpg", year:"1946", make:"Ford", model:"Super Deluxe", guess:true,
 blurb:"A maroon postwar Ford leading a whole convoy of classics down the highway. Right after WWII, factories mostly reused prewar designs — so this car looks a lot like its late-1930s ancestors.",
 units:"≈468,000 Fords built in 1946", rarity:7, hp:"≈90–100 hp (flathead V8 or I6)", top:"≈75–85 mph", engine:"3.6L–3.9L I6/V8"},

{file:"CBDD4542-29BD-422C-B23F-6EB35CAB3179.jpg", year:"1956", make:"Chevrolet", model:"Nomad", guess:true,
 blurb:"That slanted roofline and ribbed tailgate are the signature of the Nomad — a sporty two-door wagon version of the Tri-Five Chevy that only stuck around a few years before it got discontinued for being too expensive to build.",
 units:"Only ≈8,103 Nomads built in 1956", rarity:9, hp:"140–225 hp (235 I6 or 265 V8)", top:"≈100 mph", engine:"3.9L–4.3L I6/V8"},

{file:"124E357B-0B40-45CC-B2BC-82F647C1497D.jpg", year:"1934", make:"Ford", model:"3-Window Coupe (Hot Rod)", guess:true,
 blurb:"A gold '34 Ford coupe built into a full-on hot rod, race number 7 and all. Ford built over half a million cars that year, but once a body gets chopped, channeled, and fitted with a modern engine like this, it becomes one of a kind.",
 units:"≈564,000 Fords built in 1934 (this specific car is a custom, one-off build)", rarity:9, hp:"Custom build — likely 300+ hp (exact engine unknown)", top:"Unknown (custom build)", engine:"Aftermarket V8 (unknown displacement)"},

{file:"9E835889-75D8-427A-87AC-5F544D7404A9.jpg", year:"1971", make:"GMC", model:"C10 Pickup", guess:true,
 blurb:"GMC's badge-engineered twin to the Chevy C10 — nearly identical under the skin, just with GMC trim and grille. A sharp, low black stance on this one.",
 units:"GMC sold well over 100,000 C/K trucks per year in this era", rarity:4, hp:"155–250 hp (I6 or V8 options)", top:"≈95–105 mph", engine:"4.1L–6.6L I6/V8"},

{file:"AF61D0D0-3611-4BDD-8461-6EEC4E0CCEF4.jpg", year:"1933", make:"Ford", model:"3-Window Coupe (Hot Rod)", guess:true,
 blurb:"Another traditional hot rod — this time a red-and-black '33 Ford coupe with an exposed engine and open wheels, the classic hot-rodder look that's been popular since the 1950s.",
 units:"≈484,000 Fords built in 1933 (this specific car is a custom, one-off build)", rarity:9, hp:"Custom build — exact output unknown", top:"Unknown (custom build)", engine:"Aftermarket V8 (unknown displacement)"},

{file:"2C9B2DAD-056B-46A5-B2ED-249EC92691A0.jpg", year:"1961", make:"Chevrolet", model:"Corvette", guess:true,
 blurb:"A maroon first-generation Corvette (C1) with its removable hardtop on. This is the shape that came right before Corvette's famous 'split-window' Sting Ray look.",
 units:"≈10,939 Corvettes built in 1961", rarity:8, hp:"230–360 hp (283 or 327 V8)", top:"≈120–135 mph", engine:"4.6L–5.4L V8"},

{file:"B101A033-D4F1-45EA-9BB2-F4E7798C81A5.jpg", year:"1956", make:"Chevrolet", model:"Bel Air", guess:false,
 blurb:"A red-and-white 1956 Bel Air hardtop — the middle year of the beloved Tri-Five run, with that toothy chrome grille.",
 units:"≈128,000 Bel Air Sport Coupes built in 1956", rarity:6, hp:"140–225 hp (235 I6 or 265 V8)", top:"≈100–105 mph", engine:"3.9L–4.3L I6/V8"},

{file:"02BAE307-308E-4806-A71A-C476CA7E130C.jpg", year:"1970", make:"Chevrolet", model:"Chevelle SS", guess:false,
 blurb:"A blue Chevelle SS hardtop with the classic white stripe running down the hood — 1970 is considered the peak year for muscle car horsepower before insurance rates and emissions rules changed everything.",
 units:"Tens of thousands of SS Chevelles built across body styles in 1970", rarity:7, hp:"350–450 hp (396 or 454 V8)", top:"≈120–130 mph", engine:"6.6L–7.4L V8"},

{file:"19FDEC98-F7AD-45BC-B812-4CD88FC0AEC2.jpg", year:"1937", make:"Chevrolet", model:"Master Deluxe", guess:true,
 blurb:"A two-tone teal-and-black prewar Chevy sedan riding on whitewall tires. Cars from the 1930s like this one are getting rarer every year as fewer survive in driveable condition.",
 units:"≈815,000 Chevrolets built in 1937 (Master + Master Deluxe combined)", rarity:7, hp:"≈85 hp (216 cu in I6)", top:"≈70–75 mph", engine:"3.5L I6"},

{file:"C5F849EF-6B68-46A6-ADD1-43216836029A.jpg", year:"1962", make:"Cadillac", model:"Series 62 Convertible", guess:true,
 blurb:"Hot pink paint and those enormous tailfins — Cadillac fins were near their peak size in the early '60s before styling trends moved away from them. An absolute showstopper on the highway.",
 units:"≈16,545 Series 62 convertibles built in 1962", rarity:7, hp:"325 hp (390 cu in V8)", top:"≈115 mph", engine:"6.4L V8"},

{file:"D9FF4A76-E7B2-4919-B228-38EADFB17817.jpg", year:"1950", make:"Chevrolet", model:"3100 Pickup", guess:true,
 blurb:"A butter-yellow 'Advance Design' Chevy pickup, lowered and cleaned up — this truck design ran almost unchanged from 1947 to 1955 and is one of the most popular classic trucks to restore or customize today.",
 units:"Chevy built well over 500,000 Advance Design trucks across the whole run (1947-55)", rarity:5, hp:"≈90 hp (216 cu in I6)", top:"≈70 mph", engine:"3.5L I6"},

{file:"291E1B55-4A82-4718-ACB7-A1DA14F421E5.jpg", year:"1969", make:"Chevrolet", model:"Camaro (Pro Street build)", guess:false,
 blurb:"You can't miss the supercharger poking straight up through the hood scoop on this one — a heavily built 'pro street' Camaro made for serious power, not factory-stock driving.",
 units:"≈243,000 Camaros built in 1969 (this car has been heavily customized)", rarity:8, hp:"Likely 500+ hp with the supercharger (custom build, exact output unknown)", top:"Unknown (custom build)", engine:"V8 (customized, displacement unknown)"},

{file:"EDB8B186-5E29-4619-98DF-90999F912CF0.jpg", year:"1956", make:"Ford", model:"F-100", guess:true,
 blurb:"A classic silver Ford F-100 with the distinctive wraparound windshield Ford introduced in the mid-'50s. Simple, boxy, and built to work.",
 units:"Ford sold well over 100,000 F-100s in 1956", rarity:5, hp:"133–167 hp (I6 or Y-block V8)", top:"≈85 mph", engine:"3.7L–4.8L I6/V8"},

{file:"0E16C742-5F40-4FC3-BA19-D3ECC70931D6.jpg", year:"1954", make:"Chevrolet", model:"Bel Air", guess:false,
 blurb:"A copper-and-white 1954 Bel Air — the year right before the Tri-Five era's famous small-block V8 arrived, so this one likely still has the straight-six 'Blue Flame' engine under the hood.",
 units:"≈66,000 Bel Air Sport Coupes built in 1954", rarity:6, hp:"115–125 hp (235 cu in I6)", top:"≈90 mph", engine:"3.9L I6"},

{file:"A7AFDA1E-FB3C-476B-BD5A-307D80445DD3.jpg", year:"1941", make:"Pontiac or Oldsmobile", model:"Sedan", guess:true,
 blurb:"This olive-green prewar sedan is tough to pin down exactly from a moving-car photo — the vertical-bar chrome grille points to an early-1940s Pontiac or Oldsmobile, but it's a genuine best guess.",
 units:"Unknown — likely well over 100,000 built that model year", rarity:7, hp:"≈90–100 hp (straight-six)", top:"≈75–80 mph", engine:"≈3.5L–3.9L I6"},

{file:"DF29B378-2729-46D0-8378-4D70F6221FE8.jpg", year:"1969", make:"Chevrolet", model:"Camaro", guess:true,
 blurb:"A blue '69 Camaro with a red racing stripe — widely considered one of the best-looking Camaro model years ever made, and still one of the most collected muscle cars today.",
 units:"≈243,000 Camaros built in 1969", rarity:6, hp:"140–375 hp depending on trim (RS, SS, Z28)", top:"≈115–130 mph", engine:"3.8L–6.6L I6/V8"},

{file:"2F8550DD-8B71-4E8C-8C86-9A74923E25CE.jpg", year:"1934", make:"Ford", model:"Tudor Sedan (Hot Rod)", guess:true,
 blurb:"A bright yellow '34 Ford sedan with a hot-rod racing stripe down the hood and beltline — taller and roomier than the coupe hot rods but built with the same spirit.",
 units:"≈564,000 Fords built in 1934 (this specific car is a custom, one-off build)", rarity:9, hp:"Custom build — exact output unknown", top:"Unknown (custom build)", engine:"Aftermarket V8 (unknown displacement)"},

{file:"7C6C2762-9D69-451C-92C7-FF9CE0D50D58.jpg", year:"1968", make:"Ford", model:"F-100", guess:true,
 blurb:"A copper-orange 'bumpside' Ford pickup — nicknamed for the character line running along its bed sides. This second-generation F-100 body style ran from 1967 to 1972.",
 units:"Ford built several hundred thousand F-Series trucks per year in this era", rarity:4, hp:"150–235 hp (I6 or V8 options)", top:"≈90–95 mph", engine:"3.9L–6.4L I6/V8"},

{file:"A3F923F4-96BB-4669-B49B-A2A66B135C5D.jpg", year:"1931", make:"Ford", model:"Model A Coupe (Hot Rod)", guess:true,
 blurb:"The Model A was one of the best-selling cars in American history, which is exactly why so many of them ended up getting turned into hot rods like this cream-colored coupe — there were plenty of donor cars to work with.",
 units:"≈4.85 million Model As built 1927-31 (this specific car is a custom, one-off build)", rarity:8, hp:"Custom build — exact output unknown", top:"Unknown (custom build)", engine:"Aftermarket engine (unknown displacement)"},

{file:"20367509-2D9A-4A90-9690-72ECE8DC6979.jpg", year:"1977–85", make:"Ferrari", model:"308 GTS", guess:true,
 blurb:"The real jackpot of the trip — a genuine Ferrari, parked on a small-town street. Best known today as Magnum P.I.'s car on TV, the 308 has a mid-mounted V8 and pop-up-style styling that still turns heads decades later.",
 units:"≈12,254 308 GTB/GTS built in total (1975-1985)", rarity:10, hp:"205–255 hp depending on year", top:"≈143–159 mph", engine:"2.9L V8"},

{file:"C1CECCBC-F8B9-4A0A-8332-CC9F82EC01C5.jpg", year:"1999–2002", make:"Chevrolet", model:"Camaro Z28 Convertible", guess:true,
 blurb:"A red 4th-generation Camaro Z28 convertible with silver racing stripes — the last Camaro generation before a several-year hiatus, packing a genuine Corvette-derived V8.",
 units:"A few thousand Z28 convertibles built per year in this era", rarity:6, hp:"305–310 hp (5.7L LS1 V8)", top:"≈155–160 mph", engine:"5.7L V8"},

{file:"9374D083-4D58-4732-820D-60AF1DD0026A.jpg", year:"1940", make:"Ford", model:"Deluxe Coupe", guess:true,
 blurb:"A dark blue 1940 Ford coupe with a subtle pinstripe — considered by many collectors to be one of the best-looking prewar Ford designs.",
 units:"≈599,000 Fords built in 1940", rarity:7, hp:"60–85 hp (flathead V8 options)", top:"≈75–80 mph", engine:"2.2L–3.6L V8"},

{file:"A3CEB4AC-5763-4E54-8E71-0FE3BA586044.jpg", year:"1978", make:"Ford", model:"F-250", guess:true,
 blurb:"A weathered tan Ford heavy-duty pickup with a camper shell on the back — the kind of well-used work truck that's earned every scratch on that patina paint job.",
 units:"Ford built well over 100,000 F-250s in 1978", rarity:4, hp:"135–165 hp (V8 options)", top:"≈85 mph", engine:"5.8L–7.5L V8"},

{file:"64EAC38C-0B76-45D7-B6C3-3825B23B724D.jpg", year:"2013", make:"Chevrolet", model:"Camaro SS", guess:true,
 blurb:"A crisp white 5th-generation Camaro SS — the modern Camaro that brought the nameplate roaring back with retro styling cues from the late-'60s originals.",
 units:"5th-gen Camaros sold in the tens of thousands per year; SS was a smaller share", rarity:4, hp:"426 hp (6.2L LS3 V8)", top:"≈155–172 mph", engine:"6.2L V8"},

{file:"F81F3ABA-3D8C-409D-9C55-F6E9885DDC35.jpg", year:"2015–19", make:"Chevrolet", model:"Corvette (C7)", guess:true,
 blurb:"A black 7th-generation Corvette — hard to say from this angle whether it's a Stingray, Grand Sport, or the fire-breathing Z06, but any of them means serious performance.",
 units:"C7 Corvettes sold roughly 30,000–40,000 per year across all trims", rarity:5, hp:"455–650 hp depending on trim", top:"≈181–212 mph depending on trim", engine:"6.2L V8"},

{file:"86F70085-7250-4075-BEE0-144138EA0CF3.jpg", year:"Unknown", make:"Blue Bird", model:"School Bus (Converted)", guess:true,
 blurb:"Not a car at all, but too good a spot to skip — an old school bus converted into a camper, complete with roof rack and solar panels. Bus-to-camper 'skoolie' conversions have become a whole hobby of their own.",
 units:"N/A — one-of-a-kind custom conversion", rarity:8, hp:"≈175–250 hp (typical diesel bus engine)", top:"≈65–70 mph (governed)", engine:"≈5.9L–8.3L diesel I6 (best guess)"},

{file:"CFAAE3E3-41F4-4965-A650-BA38FB366ECB.jpg", year:"1937", make:"Chevrolet", model:"Sedan Delivery (Hot Rod)", guess:true,
 blurb:"A light blue panel-sided delivery truck from the 1930s, hot-rodded with a lowered stance and pinstriping — these were originally built for hauling goods, not for looking cool at a car show.",
 units:"Sedan deliveries were a low-volume commercial body style even when new (this specific car is a custom, one-off build)", rarity:9, hp:"Custom build — exact output unknown", top:"Unknown (custom build)", engine:"Aftermarket engine (unknown displacement)"},

{file:"381F9F89-70E6-4FAB-9E3F-F6F034DC4AED_4_5005_c.jpg", year:"1972", make:"Chevrolet", model:"Camaro", guess:true,
 blurb:"A maroon second-generation Camaro. 1972 was actually the lowest-production year for this generation thanks to a labor strike at the factory, making genuine '72s a bit scarcer than neighboring years.",
 units:"Only ≈68,656 Camaros built in 1972 — the lowest of the 2nd generation", rarity:7, hp:"110–200 hp (emissions-era output)", top:"≈105–115 mph", engine:"5.0L–5.7L V8"},

{file:"EAE0ECC5-7C11-42EB-84A0-7B1583DE14D3_4_5005_c.jpg", year:"1970", make:"Chevrolet", model:"Nova SS", guess:true,
 blurb:"A red Nova SS — Chevy's compact car that could be ordered with a full-size muscle car engine, making it a genuine sleeper on the street.",
 units:"≈19,558 Nova SS models built with V8 in 1970", rarity:7, hp:"300–375 hp (350 or 396 V8)", top:"≈120–130 mph", engine:"5.7L–6.5L V8"},

{file:"04FBE5D6-79D0-4BF4-A937-CD589E32BD3E_4_5005_c.jpg", year:"1987–93", make:"Ford", model:"Mustang GT (Fox Body)", guess:true,
 blurb:"A silver 'Fox Body' Mustang GT — the boxy '80s/early-'90s Mustang generation that's become hugely popular with drag racers and budget-minded collectors alike.",
 units:"Tens of thousands of Fox Body GTs built per year", rarity:4, hp:"225 hp (5.0L V8)", top:"≈140–150 mph", engine:"5.0L V8"},

{file:"1DCBE3C8-3D70-478A-8009-D51435A11111.jpg", year:"2018", make:"Subaru", model:"WRX STI", guess:false,
 blurb:"A blue WRX STI with its signature hood scoop — Subaru's rally-bred all-wheel-drive performance sedan, built to handle anything from a racetrack to a gravel road.",
 units:"A few thousand STI sold per year in the US", rarity:4, hp:"310 hp", top:"≈159 mph", engine:"2.5L turbocharged flat-4"},

{file:"574559C8-3965-450B-A3A4-B58057B0DE2D.jpg", year:"Modern", make:"Porsche", model:"Macan", guess:true,
 blurb:"A silver Porsche SUV — Porsche's smaller crossover, built to bring sports-car handling to a practical family shape.",
 units:"Porsche sells 50,000+ Macans per year worldwide", rarity:3, hp:"248–434 hp depending on trim", top:"≈135–159 mph", engine:"2.0L turbo I4 or 3.0L turbo V6"},

{file:"2CC584C1-4A62-489E-B48B-B0C871D5AD20_4_5005_c.jpg", year:"2003–09", make:"Hummer", model:"H2", guess:false,
 blurb:"There's no mistaking that boxy, chrome-grilled shape — the Hummer H2 was built to look every bit as tough as the military Humvee it was loosely inspired by, even though it rode on a civilian truck frame.",
 units:"≈150,000 H2s built total (2002-2009)", rarity:6, hp:"316–393 hp (6.0L or 6.2L V8)", top:"≈100 mph (electronically limited)", engine:"6.0L–6.2L V8"},

{file:"02044DF5-D07C-4E88-85FE-7F66E6B58E9E.jpg", year:"2018", make:"Ford", model:"Mustang GT (Custom Widebody)", guess:true,
 blurb:"This isn't a stock Mustang — the flared widebody fenders, slammed stance, and eye-popping wrap make this a one-off show car built for looks and attention.",
 units:"Custom build — one of a kind", rarity:8, hp:"460 hp stock; likely modified higher (exact output unknown)", top:"Unknown (custom build)", engine:"5.0L V8 (Coyote)"},

{file:"40BEABEE-1F88-428F-ACC3-9346DCFA3BD9_4_5005_c.jpg", year:"Modern", make:"Porsche", model:"Cayenne", guess:true,
 blurb:"Porsche's original SUV and, to this day, its best-selling model — proof that a company famous for sports cars can build a family hauler that still feels sporty.",
 units:"Porsche sells 90,000+ Cayennes per year worldwide", rarity:2, hp:"335–541 hp depending on trim", top:"≈150–172 mph", engine:"3.0L turbo V6 (or larger, depending on trim)"},

{file:"781BC62C-21DA-49E6-9175-0B2A0CB6E6E4.jpg", year:"2015", make:"Dodge", model:"Challenger R/T", guess:true,
 blurb:"A gunmetal-gray modern Challenger, seen through the windshield mid-drive — Dodge's retro-styled muscle car that leans hard into its late-'60s roots.",
 units:"Dodge sells tens of thousands of Challengers per year across all trims", rarity:4, hp:"375 hp (5.7L Hemi V8)", top:"≈155 mph", engine:"5.7L V8"},

{file:"4387F3C9-DE9E-4102-BC7E-4A560CD4014C_4_5005_c.jpg", year:"1979", make:"Ford", model:"F-150 (Lifted)", guess:true,
 blurb:"A blue lifted Ford pickup riding tall with a brush guard up front — the F-150 had already become America's best-selling truck by this point in the late '70s.",
 units:"Ford sold nearly 800,000 F-Series trucks in 1979", rarity:3, hp:"133–158 hp (351 or 400 V8)", top:"≈85–90 mph", engine:"5.8L–6.6L V8"},

{file:"B6D7382F-9C37-486C-AC47-76860CB3626E.jpg", year:"Modern", make:"Chevrolet", model:"Camaro (partial view)", guess:true,
 blurb:"A quick street scene outside a gas station — a modern Camaro is visible at the edge of the shot, but too much of it is cropped out of frame to nail down the exact trim or year.",
 units:"Unknown (partial view)", rarity:4, hp:"275–650 hp depending on trim", top:"≈130–198 mph depending on trim", engine:"2.0L turbo I4 up to 6.2L supercharged V8"},

{file:"D1F3BD80-6ED8-4D09-A3EB-4E52C096C016_4_5005_c.jpg", year:"2023–24", make:"Nissan", model:"Z", guess:false,
 blurb:"A bright yellow Nissan Z caught in motion — the newest generation of Nissan's long-running sports car line, wearing retro styling cues borrowed from the original 1970s Fairlady Z.",
 units:"≈5,000–6,000 sold per year in the US", rarity:6, hp:"400 hp (Sport/Performance) or 420 hp (NISMO)", top:"Electronically limited, ≈155 mph (est.)", engine:"3.0L twin-turbo V6"},

{file:"4C3BEDE8-5F28-477F-9F70-1BFF8FFE649A.jpg", year:"2020+", make:"Chevrolet", model:"Corvette Stingray (C8)", guess:false,
 blurb:"A blue mid-engine Corvette — the biggest change in Corvette history happened in 2020 when Chevy finally moved the engine behind the driver instead of in front, like a true exotic supercar.",
 units:"20,000–30,000+ built per year", rarity:5, hp:"490–495 hp", top:"194 mph", engine:"6.2L V8"},

{file:"BA9A1ABF-3B6C-4F30-9D5D-DDCE6CB25FD8.jpg", year:"Modern", make:"Dodge", model:"Charger Pursuit (Police)", guess:true,
 blurb:"A marked police cruiser — these fleet-only 'Pursuit' package Chargers aren't sold to regular customers, so spotting one on patrol is its own kind of rare sighting.",
 units:"Fleet-only sales to police departments", rarity:6, hp:"292–370 hp depending on engine", top:"≈145–150 mph (Pursuit-rated)", engine:"3.6L V6 or 5.7L V8"},

{file:"447AABB8-8FA6-46B3-957A-D045DEB3C37F.jpg", year:"2018–24", make:"Aston Martin", model:"Vantage", guess:true,
 blurb:"A dark blue Aston Martin — a genuine British exotic, the kind of car James Bond drives in the movies. Spotting two exotic sports cars (this and the Ferrari) on one road trip is a serious streak of luck.",
 units:"Aston Martin builds only a few thousand cars per year across its whole lineup", rarity:10, hp:"503 hp", top:"195 mph", engine:"4.0L twin-turbo V8"},

{file:"1E5FDC0B-2C2C-455B-BE61-2625A1F7EE35_4_5005_c.jpg", year:"1973", make:"Ford", model:"Mustang Mach 1", guess:false,
 blurb:"A copper Mach 1 with a black hood stripe — 1973 was the last year for the original 'first generation' Mustang before it shrank down dramatically for 1974.",
 units:"≈35,440 Mach 1s built in 1973", rarity:6, hp:"136–266 hp (302 to 351 Cobra Jet V8)", top:"≈115–125 mph", engine:"4.9L–5.8L V8"},

{file:"680D4FBE-EE88-45A9-9BF0-8C6DF3020CED.jpg", year:"Modern", make:"Dodge", model:"Challenger SRT Hellcat", guess:true,
 blurb:"Those quad round headlights are the giveaway for a Hellcat — one of the most powerful factory muscle cars ever sold, thanks to a supercharger bolted right onto the engine.",
 units:"A relatively small share of total Challenger production went to Hellcat trim", rarity:8, hp:"707 hp (supercharged 6.2L V8)", top:"199 mph", engine:"6.2L supercharged V8"},

{file:"959AA5B8-D46F-4506-9B2B-98FEEA935641_4_5005_c.jpg", year:"1979–83", make:"Toyota", model:"Pickup (Hilux)", guess:true,
 blurb:"A rusty, heavily built off-road Toyota truck on massive mud tires, riding on a trailer — this generation of Toyota pickup earned a reputation as nearly indestructible, which is probably why someone thought it was worth building up like this.",
 units:"Toyota sold well over 100,000 trucks per year in the US in this era", rarity:6, hp:"≈80–90 hp stock (custom build likely modified)", top:"Unknown (off-road build)", engine:"2.4L I4 (stock, best guess)"},

{file:"FD796966-B75F-4048-AD9B-C0243AF7D183_4_5005_c.jpg", year:"Modern", make:"Dodge", model:"Charger R/T", guess:true,
 blurb:"A black modern Charger — Dodge kept building big, rear-wheel-drive V8 sedans long after most other American brands gave up on them.",
 units:"Dodge sells tens of thousands of Chargers per year across all trims", rarity:4, hp:"370 hp (5.7L Hemi V8)", top:"≈150–160 mph", engine:"5.7L V8"},

{file:"97BB7158-B258-4618-A286-A24EED9FE87D.jpg", year:"Modern", make:"Porsche", model:"911 Cabriolet", guess:true,
 blurb:"A silver 911 convertible cruising through town with the top down — the 911 has been in continuous production since 1963, longer than almost any other sports car in the world.",
 units:"Porsche sells 35,000+ 911s per year worldwide (all variants)", rarity:5, hp:"370–450 hp depending on trim", top:"≈178–191 mph", engine:"3.0L twin-turbo flat-6"},

{file:"622268EB-B7D8-45B1-802A-284EA428D6F2.jpg", year:"1974", make:"Ford", model:"Bronco (Monster Build)", guess:true,
 blurb:"An early Ford Bronco built up on absolutely massive tires for serious off-roading — the 'Off-Road Enterprises' sticker on the windshield says this rig means business.",
 units:"≈230,939 early Broncos built 1966-77 (this specific truck has been heavily modified)", rarity:9, hp:"Unknown — heavily modified off-road build", top:"Unknown (off-road build)", engine:"4.9L–5.0L V8 (stock base, best guess)"},

{file:"C03033E6-2C2F-4AC2-8983-51A4D9CCEE2B_4_5005_c.jpg", year:"1973", make:"Ford", model:"F-100", guess:true,
 blurb:"A green-and-white two-tone 'bumpside' Ford pickup — the same body style as the orange one spotted earlier in the trip, just in different colors.",
 units:"Ford built several hundred thousand F-Series trucks per year in this era", rarity:4, hp:"156–172 hp", top:"≈90 mph", engine:"4.9L–5.8L I6/V8"},

{file:"F7FD8A6B-12E4-4532-96F1-4BD36229B132_4_5005_c.jpg", year:"1996–2002", make:"BMW", model:"Z3", guess:true,
 blurb:"A bright yellow BMW roadster with the top down — the Z3 was BMW's first mass-market two-seat convertible, and it even had its own cameo as James Bond's car in GoldenEye.",
 units:"≈297,000 Z3s built total (1995-2002)", rarity:5, hp:"138–189 hp depending on engine", top:"≈127–140 mph", engine:"1.9L–2.5L I6/I4"},

{file:"8A97D115-8A55-45DA-89D0-E89AC6AAF0CC_4_5005_c.jpg", year:"1980s", make:"Dodge or Plymouth", model:"K-Car Wagon", guess:true,
 blurb:"A boxy '80s wagon glimpsed from behind — likely one of Chrysler's famous 'K-cars,' the compact, budget-friendly cars credited with saving the company from bankruptcy.",
 units:"Chrysler built over 2 million K-cars total across the lineup", rarity:6, hp:"84–100 hp (2.2L I4)", top:"≈95 mph", engine:"2.2L I4"},

{file:"AE7E3BE4-8CB0-42D3-A9BC-E1244801FA8E_4_5005_c.jpg", year:"Modern", make:"Ford", model:"F-150 (Lifted Custom)", guess:true,
 blurb:"A row of parked trucks outside a shop — the closest one is a lifted, blacked-out F-150 loaded with off-road gear on the roof rack.",
 units:"Ford sells 700,000+ F-150s per year", rarity:3, hp:"290–450 hp depending on engine", top:"≈100–110 mph (governed)", engine:"2.7L–5.0L V6/V8 (best guess)"},

{file:"94340830-77DD-4550-B57F-51EF4C791F09.jpg", year:"Unknown", make:"Toyota", model:"Starlet (Widebody Build)", guess:true,
 blurb:"An extremely modified little hatchback with a widebody kit, teal wheels, a roof-mounted intake, and roll cage visible through the windows — this one is a genuine puzzle, but the proportions suggest an early-1980s Toyota Starlet built for drifting or track days.",
 units:"Unknown — heavily customized, essentially one of a kind now", rarity:9, hp:"Unknown (modified engine)", top:"Unknown (custom build)", engine:"Unknown (custom build)"},

{file:"E26917A5-C6B9-4BD7-8558-A635D2E2CF3F.jpg", year:"2005–09", make:"Ford", model:"Mustang GT", guess:true,
 blurb:"A black Mustang GT caught driving through the rain — this 'S197' generation brought back retro styling cues after Ford studied its own classic Mustangs for inspiration.",
 units:"25,000–35,000+ GT trims sold per year in this era", rarity:3, hp:"300 hp (4.6L V8)", top:"≈150–155 mph", engine:"4.6L V8"},

{file:"9E5F60E3-6E6D-430A-935B-A9230FC7E117.jpg", year:"Modern", make:"Dodge", model:"Challenger SRT 392", guess:true,
 blurb:"A 'Plum Crazy' purple Challenger — Dodge has always leaned into wild, attention-grabbing paint colors with playful names for its muscle cars.",
 units:"SRT 392 is a smaller share of overall Challenger sales", rarity:6, hp:"485 hp (6.4L V8)", top:"≈175 mph", engine:"6.4L V8"},

{file:"2B560333-DF27-4D4D-88D8-E72A1865E4C3_4_5005_c.jpg", year:"Unknown", make:"Mercedes-Benz", model:"Unimog (Expedition Camper)", guess:true,
 blurb:"About as far from a normal car as this trip gets — the Unimog is a German military and off-road workhorse, here converted into a serious overland camper. Genuinely one of the rarest sights on the whole trip.",
 units:"Over 400,000 Unimogs built across 70+ years of history (all variants combined)", rarity:9, hp:"≈150–299 hp depending on model (older ones far less)", top:"≈50–56 mph (geared for torque, not speed)", engine:"Diesel I4–I6 (exact model unknown)"},

{file:"297B7B7E-DD3A-49DB-873D-7EEA50AD4DF7.jpg", year:"2016–18", make:"Chevrolet", model:"Camaro SS", guess:true,
 blurb:"A blue 6th-generation Camaro SS — this generation is widely praised by car reviewers as one of the best-handling Camaros ever built.",
 units:"6th-gen Camaros sold 65,000-70,000+ per year across all trims early on", rarity:4, hp:"455 hp (6.2L LT1 V8)", top:"≈165 mph", engine:"6.2L V8"},

{file:"5E73F0FC-6E5F-46E4-A17A-C1A31AF48AF0.jpg", year:"Unknown", make:"Military", model:"M35-Series Cargo Truck", guess:true,
 blurb:"A tan military cargo truck, nicknamed a 'deuce and a half' in service — thousands were built for the US Army, and surplus examples occasionally get sold to civilians and collectors.",
 units:"Over 1 million M35-series trucks built across all variants and decades", rarity:7, hp:"130–145 hp (multifuel engine)", top:"≈58 mph (governed)", engine:"6.2L I6 multifuel (best guess)"},

{file:"13863B06-D1A1-43EC-B697-E2AC19370FDF.jpg", year:"Modern", make:"Can-Am", model:"Maverick X3 (UTV)", guess:true,
 blurb:"Not a car — a side-by-side off-road buggy, spotted on a trailer at what looks like a staging area for a dune or off-road event.",
 units:"Tens of thousands sold per year", rarity:3, hp:"120–195 hp depending on trim", top:"≈89–93 mph (stock)", engine:"900cc turbocharged inline-3"},

{file:"16C4CFA8-E821-4A7E-B02C-64DD66C35AA4.jpg", year:"2024–25", make:"Volkswagen", model:"ID.Buzz", guess:false,
 blurb:"The reborn VW microbus — an all-electric tribute to the classic hippie-era VW Bus, with the same friendly round face but a battery pack instead of an engine.",
 units:"Still ramping up in the US — a new model for 2024-25", rarity:6, hp:"335 hp (dual-motor AWD)", top:"Electronically limited, likely ≈99 mph", engine:"Electric motor(s), 91 kWh battery"},

{file:"F643004E-02B0-4464-9D10-4477CE171F9C_4_5005_c.jpg", year:"2024", make:"Ford", model:"Mustang Dark Horse", guess:true,
 blurb:"A black Mustang with an aggressive rear wing and wide stance — the Dark Horse is the top-performance trim of the current Mustang generation.",
 units:"Dark Horse is a smaller share of overall Mustang production", rarity:6, hp:"500 hp", top:"189 mph", engine:"5.0L V8"},

{file:"B55E2598-5B53-485F-BBC1-1C427248366E.jpg", year:"2020+", make:"Chevrolet", model:"Corvette Stingray (C8)", guess:false,
 blurb:"Another mid-engine Corvette sighting — this time in black. Two C8 Corvette spots on one trip says a lot about how popular this generation has become.",
 units:"20,000–30,000+ built per year", rarity:5, hp:"490–495 hp", top:"194 mph", engine:"6.2L V8"},

{file:"7D2E2573-4287-4A4F-A7D0-B56BDF2304CC.jpg", year:"≈2000", make:"Honda", model:"Accord Coupe", guess:true,
 blurb:"A maroon Honda coupe seen from behind — a common, reliable commuter car that's easy to overlook next to all the classics and exotics on this trip, but still worth a spot.",
 units:"Honda sold roughly 400,000 Accords per year in the US around this time", rarity:2, hp:"150–200 hp depending on engine", top:"≈120–130 mph", engine:"2.3L I4 or 3.0L V6"},

{file:"4EE3D715-AC52-4EC3-AD33-025D0E86A016_4_5005_c.jpg", year:"1997–2008", make:"Porsche", model:"Boxster", guess:true,
 blurb:"A silver Porsche Boxster, seen head-on — Porsche's mid-engine roadster that's often called the most affordable way into genuine Porsche ownership.",
 units:"Porsche sold 25,000+ Boxsters per year at its peak", rarity:4, hp:"201–295 hp depending on generation/trim", top:"≈155–170 mph", engine:"2.5L–3.4L flat-6"},

{file:"CA75EE13-5EC5-4D47-A6DD-DA70F928A012.jpg", year:"2019+", make:"Chevrolet", model:"Camaro SS", guess:true,
 blurb:"A blue 6th-generation Camaro SS with the facelifted front end Chevy introduced partway through this generation's run.",
 units:"6th-gen Camaros sold tens of thousands per year across all trims", rarity:4, hp:"455 hp (6.2L LT1 V8)", top:"≈165 mph", engine:"6.2L V8"},

{file:"88568655-CBEA-40F5-A7CE-7A7F363FA896.jpg", year:"Modern", make:"Dodge", model:"Charger SRT Widebody", guess:true,
 blurb:"A white Charger with flared widebody fenders, driving through the rain — the Widebody package adds extra tire width for serious grip.",
 units:"Widebody Chargers are a smaller share of overall Charger sales", rarity:7, hp:"485 hp (6.4L V8)", top:"≈175 mph", engine:"6.4L V8"},

{file:"6F9A5272-AA49-4962-B251-9F364E0EB775.jpg", year:"1984–96", make:"Chevrolet", model:"Corvette (C4)", guess:true,
 blurb:"A dark sports car glimpsed through a rainy windshield, far down the road — the shape suggests a C4-generation Corvette, but honestly this one's too distant and blurry to be sure.",
 units:"≈358,180 C4 Corvettes built 1984-1996", rarity:5, hp:"205–300 hp depending on year/trim", top:"≈140–150 mph", engine:"5.7L V8"},

{file:"3390F924-7D72-4279-A1BC-6D1FFD969254_4_5005_c.jpg", year:"1966", make:"Chevrolet", model:"C10 Suburban", guess:true,
 blurb:"An orange-and-white classic Suburban — Chevy's Suburban has been in continuous production since 1935, making it one of the longest-running nameplates in automotive history.",
 units:"Roughly 15,000-20,000 Suburbans sold per year in this era", rarity:7, hp:"140–220 hp (I6 or V8 options)", top:"≈95 mph", engine:"3.8L–5.4L I6/V8"},

{file:"3FD81224-A846-402E-8EBF-19121DDC8CD5_4_5005_c.jpg", year:"1965", make:"Chevrolet", model:"C10 Suburban", guess:true,
 blurb:"A turquoise Suburban cruising along the coastline — one generation earlier than the orange one also spotted on this trip.",
 units:"Roughly 15,000-20,000 Suburbans sold per year in this era", rarity:7, hp:"140–220 hp (I6 or V8 options)", top:"≈95 mph", engine:"3.8L–5.4L I6/V8"},

{file:"45279CE1-AD16-4EB8-9CCA-6C565E1BB6A1_4_5005_c.jpg", year:"2018+", make:"Ford", model:"Mustang GT", guess:true,
 blurb:"A dark blue Mustang GT parked next to a red Corvette in the background — two American sports car legends side by side outside a small shop.",
 units:"40,000+ GT trims sold per year", rarity:3, hp:"460 hp (5.0L Coyote V8)", top:"≈155 mph (165 mph with Performance Pack)", engine:"5.0L V8"},

{file:"5E287E50-38D9-49B4-A8DF-0FAE949F8D31_4_5005_c.jpg", year:"1991", make:"Chevrolet", model:"Corvette (C4)", guess:true,
 blurb:"A sleek black C4-generation Corvette — this was Corvette's angular, wedge-shaped era, a big styling departure from the curvier C3 that came before it.",
 units:"≈20,639 Corvettes built in 1991", rarity:6, hp:"245 hp (5.7L L98 V8)", top:"≈150 mph", engine:"5.7L V8"},

{file:"E34F1103-833E-4B6D-94CF-52929A6486E2_4_5005_c.jpg", year:"Unknown", make:"Custom-Built", model:"Flatbed Semi Truck", guess:true,
 blurb:"Not a car at all — a custom flatbed semi truck, most likely built to haul some of the massive off-road trucks and buggies also spotted on this trip.",
 units:"N/A — custom conversion of a heavy truck chassis", rarity:7, hp:"400–600 hp (typical semi diesel)", top:"≈65–75 mph (governed)", engine:"≈12–15L diesel I6 (best guess)"},
];
