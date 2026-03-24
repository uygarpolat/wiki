insert into articles (
  slug,
  source_language,
  wikipedia_title,
  wikipedia_url,
  wikipedia_revision_id,
  source_extract,
  summary_text,
  article_history_url,
  attribution_text,
  category,
  reading_minutes,
  quality_status,
  published_at
) values (
  'voynich-manuscript',
  'en',
  'Voynich manuscript',
  'https://en.wikipedia.org/wiki/Voynich_manuscript',
  NULL,
  'The Voynich manuscript is an illustrated codex, hand-written in an unknown script referred to as Voynichese.',
  'The Voynich manuscript is an illustrated codex written in an unknown script, usually dated to the early fifteenth century. It is named after the book dealer Wilfrid Voynich, who acquired it in 1912, and it is now held by the Beinecke Rare Book and Manuscript Library at Yale University. The manuscript is physically real and has been studied as a historical object for decades, but no interpretation of its writing has achieved broad scholarly acceptance. That combination of well-documented material history and unresolved textual meaning has made it one of the most discussed manuscripts in popular and academic writing about cryptography and medieval books.

The manuscript contains several kinds of illustrations, including plants, astronomical or cosmological diagrams, bathing figures, and dense circular charts. Scholars often divide it into sections on that basis, although the exact purpose of those sections remains uncertain. Radiocarbon dating of the parchment has placed the material in the early 1400s, and examination of the inks and handwriting has supported the view that the book is a genuine historical artifact rather than a recent fabrication. Physical study therefore answers some basic questions about when the manuscript was made while leaving open the larger question of what its script represents.

Interpretations of the text have varied widely. Some researchers have argued that it records a real natural language written in an unknown or disguised form, while others have suggested that it is a cipher, an invented writing system, or a meaningless construction designed to resemble learned writing. Statistical analysis has sometimes suggested patterned structure in the text, but those results have not settled the question. The pictures have also been used to support competing theories, since some readers see them as evidence of herbal, medical, or astronomical content, while others view them as too ambiguous to ground a reliable translation.

The manuscript remains notable because it sits at the intersection of book history, linguistics, cryptography, and the study of scholarly culture in late medieval Europe. It shows how much can be known about an object’s manufacture, transmission, and physical condition without producing a final answer about its content. For that reason, the Voynich manuscript is often treated not only as an unsolved puzzle, but also as a case study in the limits of interpretation. It continues to attract attention because it offers a rare instance in which a substantial written artifact survives while its language or system of notation remains unidentified.',
  'https://en.wikipedia.org/wiki/Voynich_manuscript?action=history',
  'This summary adapts Wikipedia content and is available under CC BY-SA 4.0.',
  'Unsolved history',
  2,
  'published',
  now()
)
on conflict (slug) do update set
  source_language = excluded.source_language,
  wikipedia_title = excluded.wikipedia_title,
  wikipedia_url = excluded.wikipedia_url,
  wikipedia_revision_id = excluded.wikipedia_revision_id,
  source_extract = excluded.source_extract,
  summary_text = excluded.summary_text,
  article_history_url = excluded.article_history_url,
  attribution_text = excluded.attribution_text,
  category = excluded.category,
  reading_minutes = excluded.reading_minutes,
  quality_status = excluded.quality_status,
  published_at = excluded.published_at;

insert into articles (
  slug,
  source_language,
  wikipedia_title,
  wikipedia_url,
  wikipedia_revision_id,
  source_extract,
  summary_text,
  article_history_url,
  attribution_text,
  category,
  reading_minutes,
  quality_status,
  published_at
) values (
  'antikythera-mechanism',
  'en',
  'Antikythera mechanism',
  'https://en.wikipedia.org/wiki/Antikythera_mechanism',
  NULL,
  'The Antikythera mechanism is an ancient Greek hand-powered orrery and the oldest known example of an analogue computer.',
  'The Antikythera mechanism is an ancient Greek geared device discovered in a shipwreck near the island of Antikythera. It is widely regarded as the earliest known surviving example of a complex analogue calculating machine. The recovered fragments date to the late Hellenistic period and contain interlocking bronze gears housed within a case. From the beginning, the object drew attention because it showed a level of mechanical sophistication that had not previously been associated with surviving artifacts from the ancient Mediterranean on this scale.

Research has shown that the mechanism was designed to model astronomical cycles. By turning a hand-operated system of gears, a user could track relationships involving the Sun, the Moon, eclipse cycles, and probably several known planets. Inscriptions on the device and reconstructions of its internal structure suggest that it functioned as a kind of astronomical display and prediction instrument rather than a general-purpose machine. Its importance lies not only in the complexity of the gear train, but also in the conceptual step of expressing celestial regularities through a portable mechanical model.

The mechanism survives only in fragments, so many details of its original construction and appearance have had to be reconstructed. Modern imaging, including X-ray techniques, has allowed researchers to identify hidden inscriptions and better understand the arrangement of the gears. These studies have made it possible to recover much of the device''s logic, even though some uncertainty remains about the precise form of missing components. As a result, the mechanism is both unusually well understood for a fragmentary object and still open to limited technical debate.

The Antikythera mechanism has become significant in the history of science because it changes how ancient engineering is described. It provides evidence that Greek mechanical and mathematical knowledge could be combined in a highly compact instrument with explanatory and predictive functions. Rather than standing as an isolated curiosity, it is often taken as an indication that sophisticated traditions of instrument making existed even if few comparable devices survived. Its historical value therefore lies in what it reveals about lost technical traditions as much as in the object itself.',
  'https://en.wikipedia.org/wiki/Antikythera_mechanism?action=history',
  'This summary adapts Wikipedia content and is available under CC BY-SA 4.0.',
  'Ancient technology',
  2,
  'published',
  now()
)
on conflict (slug) do update set
  source_language = excluded.source_language,
  wikipedia_title = excluded.wikipedia_title,
  wikipedia_url = excluded.wikipedia_url,
  wikipedia_revision_id = excluded.wikipedia_revision_id,
  source_extract = excluded.source_extract,
  summary_text = excluded.summary_text,
  article_history_url = excluded.article_history_url,
  attribution_text = excluded.attribution_text,
  category = excluded.category,
  reading_minutes = excluded.reading_minutes,
  quality_status = excluded.quality_status,
  published_at = excluded.published_at;

insert into articles (
  slug,
  source_language,
  wikipedia_title,
  wikipedia_url,
  wikipedia_revision_id,
  source_extract,
  summary_text,
  article_history_url,
  attribution_text,
  category,
  reading_minutes,
  quality_status,
  published_at
) values (
  'hubble-deep-field',
  'en',
  'Hubble Deep Field',
  'https://en.wikipedia.org/wiki/Hubble_Deep_Field',
  NULL,
  'The Hubble Deep Field is an image of a small region in the constellation Ursa Major constructed from a series of observations by the Hubble Space Telescope.',
  'The Hubble Deep Field is an image of a very small region of sky in the constellation Ursa Major, created from a series of long exposures taken by the Hubble Space Telescope in 1995. Astronomers selected an area that appeared relatively empty in order to test what prolonged observation would reveal. The resulting image showed thousands of galaxies, many of them extremely distant. It quickly became one of the most widely recognized astronomical images because it presented a large amount of cosmological information in a single frame.

The image is important partly because of scale. It covers only a tiny fraction of the sky, yet it contains a dense field of galaxies rather than scattered isolated objects. Many of those galaxies are so distant that the light recorded by Hubble had traveled for billions of years before reaching the telescope. For that reason, the image is often described as a view not only across great distances but also into earlier stages of cosmic history. It provided a direct visual example of how a small patch of apparently empty sky could contain a substantial record of the universe beyond the Milky Way.

The Hubble Deep Field also had scientific significance beyond its public visibility. Deep-field observations helped astronomers study galaxy formation, galaxy evolution, and the large-scale distribution of distant objects. They provided data that could be compared with theoretical models of the early universe and with later deep-field surveys using other instruments. The original Hubble Deep Field was followed by additional deep observations, including the Hubble Ultra-Deep Field, which extended the same basic approach. In that sense, the image was both a specific result and the beginning of a broader observational program.

Its place in public culture comes from the combination of technical precision and visual clarity. The image made abstract astronomical ideas easier to understand without changing their scientific meaning. It showed that ordinary-looking regions of the sky could contain far more structure than the unaided eye or shorter observations would suggest. As a result, the Hubble Deep Field is often used to illustrate the density of galaxies in the observable universe and the value of long-duration observation in astronomy.',
  'https://en.wikipedia.org/wiki/Hubble_Deep_Field?action=history',
  'This summary adapts Wikipedia content and is available under CC BY-SA 4.0.',
  'Astronomy',
  2,
  'published',
  now()
)
on conflict (slug) do update set
  source_language = excluded.source_language,
  wikipedia_title = excluded.wikipedia_title,
  wikipedia_url = excluded.wikipedia_url,
  wikipedia_revision_id = excluded.wikipedia_revision_id,
  source_extract = excluded.source_extract,
  summary_text = excluded.summary_text,
  article_history_url = excluded.article_history_url,
  attribution_text = excluded.attribution_text,
  category = excluded.category,
  reading_minutes = excluded.reading_minutes,
  quality_status = excluded.quality_status,
  published_at = excluded.published_at;

insert into articles (
  slug,
  source_language,
  wikipedia_title,
  wikipedia_url,
  wikipedia_revision_id,
  source_extract,
  summary_text,
  article_history_url,
  attribution_text,
  category,
  reading_minutes,
  quality_status,
  published_at
) values (
  'svalbard-global-seed-vault',
  'en',
  'Svalbard Global Seed Vault',
  'https://en.wikipedia.org/wiki/Svalbard_Global_Seed_Vault',
  NULL,
  'The Svalbard Global Seed Vault is a secure backup facility for the world seed bank on the Norwegian island of Spitsbergen in the remote Arctic Svalbard archipelago.',
  'The Svalbard Global Seed Vault is a secure backup facility for seed samples from gene banks around the world. Located on the Norwegian archipelago of Svalbard, it stores duplicate samples so that crop diversity can be preserved if original collections are damaged, lost, or destroyed. The vault is not intended to replace national or regional seed banks. Instead, it functions as an additional layer of protection within a larger international system concerned with agricultural biodiversity and long-term food security.

Seeds sent to the vault are deposited by the institutions that hold the original collections and remain their property. The storage environment is designed to support long-term preservation through low temperatures and controlled conditions. Svalbard was chosen partly because of its remote location and cold climate, which were seen as advantageous for secure storage. The facility therefore combines a practical conservation goal with a location specifically selected for stability and durability over long time spans.

The significance of the vault lies in the role crop diversity plays in agriculture. Different seed varieties can carry traits related to climate adaptation, pest resistance, yield, and other characteristics that may become important under changing conditions. When a seed collection is lost, rebuilding it may be difficult or impossible. The existence of a secure backup can therefore matter not only to researchers, but also to farming systems that depend on access to a broad genetic base. In this sense, the vault supports conservation by preserving options rather than promoting a single agricultural model.

The Svalbard Global Seed Vault is often cited as an example of preventive infrastructure. It exists to reduce the consequences of failure elsewhere, whether caused by conflict, accident, or environmental disruption. Its importance is therefore easiest to understand as part of a wider network of institutions rather than as a stand-alone solution. By storing duplicates of seed collections from many parts of the world, it provides a practical reserve for plant genetic resources that might otherwise become more vulnerable over time.',
  'https://en.wikipedia.org/wiki/Svalbard_Global_Seed_Vault?action=history',
  'This summary adapts Wikipedia content and is available under CC BY-SA 4.0.',
  'Food security',
  2,
  'published',
  now()
)
on conflict (slug) do update set
  source_language = excluded.source_language,
  wikipedia_title = excluded.wikipedia_title,
  wikipedia_url = excluded.wikipedia_url,
  wikipedia_revision_id = excluded.wikipedia_revision_id,
  source_extract = excluded.source_extract,
  summary_text = excluded.summary_text,
  article_history_url = excluded.article_history_url,
  attribution_text = excluded.attribution_text,
  category = excluded.category,
  reading_minutes = excluded.reading_minutes,
  quality_status = excluded.quality_status,
  published_at = excluded.published_at;

insert into articles (
  slug,
  source_language,
  wikipedia_title,
  wikipedia_url,
  wikipedia_revision_id,
  source_extract,
  summary_text,
  article_history_url,
  attribution_text,
  category,
  reading_minutes,
  quality_status,
  published_at
) values (
  'battle-of-los-angeles',
  'en',
  'Battle of Los Angeles',
  'https://en.wikipedia.org/wiki/Battle_of_Los_Angeles',
  '1334684457',
  'The Battle of Los Angeles is the name given to a rumored attack on the continental United States by Imperial Japan and the subsequent anti-aircraft artillery barrage over Los Angeles, California, in February 1942.',
  'The Battle of Los Angeles is the name given to an anti-aircraft barrage and air-raid scare that took place over Los Angeles, California, on the night of 24-25 February 1942. The incident occurred early in the United States'' participation in the Second World War, only months after the attack on Pearl Harbor and one day after the Japanese shelling of Ellwood near Santa Barbara. Contemporary observers initially feared that Japanese aircraft were attacking Southern California, but later official investigations concluded that no enemy raid had taken place.

The background to the incident was a period of acute war anxiety on the American West Coast. After Pearl Harbor, blackout measures, invasion rumors, and reports of Japanese submarine activity had made the possibility of attack seem plausible to many civilians and officials. On 24 February, the Office of Naval Intelligence warned that an attack on mainland California might be expected within hours. Later that night and into the early morning, reports of lights and unidentified objects in the sky led to renewed alerts across Los Angeles County.

Air-raid sirens sounded at about 2:25 a.m., a blackout was imposed, and anti-aircraft batteries began firing shortly afterward. More than 1,400 shells were eventually discharged into the night sky, while interceptor pilots were placed on alert but did not take off. No enemy aircraft were confirmed. The principal physical damage came from falling shell fragments, while five civilians died indirectly during the episode, including people killed in traffic accidents and heart attacks associated with the panic and disruption.

The event quickly became a subject of dispute and speculation. Secretary of the Navy Frank Knox described it as a false alarm caused by war nerves, while some Army statements and newspaper commentary left room for theories about enemy aircraft or a cover-up. Later historical assessments moved more firmly toward a noncombat explanation. In 1983, the U.S. Office of Air Force History concluded that the initial alarm was most likely triggered by a meteorological balloon, after which searchlights, shell bursts, and wartime tension contributed to a cascade of mistaken sightings. The incident has remained notable as an example of how fear, uncertainty, and military readiness interacted on the home front during the war.',
  'https://en.wikipedia.org/wiki/Battle_of_Los_Angeles?action=history',
  'This summary adapts Wikipedia content and is available under CC BY-SA 4.0.',
  'World War II',
  2,
  'published',
  now()
)
on conflict (slug) do update set
  source_language = excluded.source_language,
  wikipedia_title = excluded.wikipedia_title,
  wikipedia_url = excluded.wikipedia_url,
  wikipedia_revision_id = excluded.wikipedia_revision_id,
  source_extract = excluded.source_extract,
  summary_text = excluded.summary_text,
  article_history_url = excluded.article_history_url,
  attribution_text = excluded.attribution_text,
  category = excluded.category,
  reading_minutes = excluded.reading_minutes,
  quality_status = excluded.quality_status,
  published_at = excluded.published_at;

insert into articles (
  slug,
  source_language,
  wikipedia_title,
  wikipedia_url,
  wikipedia_revision_id,
  source_extract,
  summary_text,
  article_history_url,
  attribution_text,
  category,
  reading_minutes,
  quality_status,
  published_at
) values (
  '1904-olympic-mens-marathon',
  'en',
  '1904 Olympic men''s marathon',
  'https://en.wikipedia.org/wiki/Athletics_at_the_1904_Summer_Olympics_%E2%80%93_Men%27s_marathon',
  '1342146223',
  'The men''s marathon at the 1904 Summer Olympics in St. Louis took place on 30 August 1904 and became notorious for harsh conditions, poor organization, and a series of unusual incidents during the race.',
  'The men''s marathon at the 1904 Summer Olympics in St. Louis is one of the most unusual races in Olympic history. Run on 30 August 1904 over a distance of 24 miles and 1,500 yards, it took place before the modern marathon distance was standardized. The race is remembered less for the finishing time than for the conditions under which it was held and for the series of incidents that turned it into a lasting example of the disorder of early Olympic competition.

Thirty-two runners from seven nations entered, but the event was staged in severe heat and on dusty roads with very limited access to water. The course began with laps inside the stadium and then moved onto public roads where runners had to contend with traffic, vehicles, and clouds of dust raised by officials'' cars. Only 14 athletes finished. The field also included Len Taunyane and Jan Mashiani, the first two black Africans known to have competed in the Olympic Games.

The race became famous for a sequence of extraordinary episodes. Frederick Lorz crossed the line first, was briefly treated as the winner, and was then disqualified after it was discovered that he had traveled part of the course by car. Thomas Hicks, who was declared the official winner, finished in a state of near collapse after his trainers gave him repeated doses of strychnine mixed with brandy and egg white, an episode often cited as an early example of performance-enhancing drug use in the modern Olympics. Cuban runner Andarin Carvajal, who had arrived under difficult circumstances, stopped during the race to eat fruit, became ill, took a nap, and still managed to finish fourth.

The 1904 Olympic men''s marathon has remained notable because it illustrates how loosely organized endurance sport could be in the early twentieth century. Later accounts have treated it as a race shaped by heat, dehydration, poor officiating, and improvisation rather than by standardized modern competition rules. For that reason, it is often discussed not just as an Olympic event, but as a case study in how the marathon changed as international sport became more regulated and medically informed.',
  'https://en.wikipedia.org/wiki/Athletics_at_the_1904_Summer_Olympics_%E2%80%93_Men%27s_marathon?action=history',
  'This summary adapts Wikipedia content and is available under CC BY-SA 4.0.',
  'Olympic history',
  2,
  'published',
  now()
)
on conflict (slug) do update set
  source_language = excluded.source_language,
  wikipedia_title = excluded.wikipedia_title,
  wikipedia_url = excluded.wikipedia_url,
  wikipedia_revision_id = excluded.wikipedia_revision_id,
  source_extract = excluded.source_extract,
  summary_text = excluded.summary_text,
  article_history_url = excluded.article_history_url,
  attribution_text = excluded.attribution_text,
  category = excluded.category,
  reading_minutes = excluded.reading_minutes,
  quality_status = excluded.quality_status,
  published_at = excluded.published_at;

insert into articles (
  slug,
  source_language,
  wikipedia_title,
  wikipedia_url,
  wikipedia_revision_id,
  source_extract,
  summary_text,
  article_history_url,
  attribution_text,
  category,
  reading_minutes,
  quality_status,
  published_at
) values (
  'gimli-glider',
  'en',
  'Gimli Glider',
  'https://en.wikipedia.org/wiki/Gimli_Glider',
  '1339304065',
  'Air Canada Flight 143 was a scheduled domestic passenger flight that ran out of fuel in July 1983 and was successfully glided to an emergency landing at Gimli, Manitoba.',
  'The Gimli Glider is the nickname given to Air Canada Flight 143, a Boeing 767 that ran out of fuel on 23 July 1983 while flying from Montreal to Edmonton. After both engines failed at an altitude of 41,000 feet, the crew managed to glide the aircraft to an emergency landing at Gimli in Manitoba. Although several people were injured, none were killed, and the aircraft was later repaired and returned to service. The incident became one of the best-known examples of a large jetliner being landed safely after total loss of engine power.

The immediate cause was fuel exhaustion, but the underlying problem was a chain of technical and procedural failures. The aircraft''s fuel-quantity indication system had malfunctioned, so the amount of fuel on board had to be calculated manually. During refuelling, the crew and ground staff used the wrong conversion factor because Air Canada was in the middle of changing from imperial to metric measurements. As a result, the aircraft departed with substantially less fuel than was required, even though the calculations appeared correct to the people involved at the time.

When the engines shut down over Ontario, the pilots lost not only thrust but also most of the electrical and hydraulic support normally supplied by the engines. A ram air turbine provided limited emergency power, but the situation was still highly abnormal, and the Boeing 767 had not been expected to face an all-engines-out scenario in regular service. Captain Bob Pearson, who had glider experience, used glide techniques to conserve range while First Officer Maurice Quintal helped work through options for a landing site. They ultimately diverted to Gimli, a former air force base that had been converted partly into a motorsports facility.

The investigation concluded that the accident exposed weaknesses in Air Canada''s procedures, training, manuals, and unit-conversion practices. It also drew attention to the risks created by mixed imperial and metric systems during a transitional period. The Gimli Glider remains notable because it combined a preventable fueling error with an unusually successful emergency response. In aviation history, it is often remembered both as a systems failure and as a rare case in which a wide-body jet was saved by careful improvised airmanship after complete fuel loss.',
  'https://en.wikipedia.org/wiki/Gimli_Glider?action=history',
  'This summary adapts Wikipedia content and is available under CC BY-SA 4.0.',
  'Aviation',
  2,
  'published',
  now()
)
on conflict (slug) do update set
  source_language = excluded.source_language,
  wikipedia_title = excluded.wikipedia_title,
  wikipedia_url = excluded.wikipedia_url,
  wikipedia_revision_id = excluded.wikipedia_revision_id,
  source_extract = excluded.source_extract,
  summary_text = excluded.summary_text,
  article_history_url = excluded.article_history_url,
  attribution_text = excluded.attribution_text,
  category = excluded.category,
  reading_minutes = excluded.reading_minutes,
  quality_status = excluded.quality_status,
  published_at = excluded.published_at;

insert into articles (
  slug,
  source_language,
  wikipedia_title,
  wikipedia_url,
  wikipedia_revision_id,
  source_extract,
  summary_text,
  article_history_url,
  attribution_text,
  category,
  reading_minutes,
  quality_status,
  published_at
) values (
  'henrietta-lacks',
  'en',
  'Henrietta Lacks',
  'https://en.wikipedia.org/wiki/Henrietta_Lacks',
  'latest accepted revision reviewed on 22 March 2026',
  'Henrietta Lacks was an African-American woman whose cancer cells became the source of the HeLa cell line, the first widely used immortalized human cell line in medical research.',
  'Henrietta Lacks was an African-American woman whose cancer cells became the source of the HeLa cell line, one of the most important tools in modern medical research. She was born Loretta Pleasant in Virginia in 1920 and died in Baltimore in 1951 at the age of 31 from cervical cancer. During her treatment at Johns Hopkins Hospital, tissue samples were taken from her tumor. Cells from one of those samples proved unusually durable and reproducible in laboratory conditions, allowing researchers to create the first widely used immortalized human cell line.

The scientific importance of HeLa cells is difficult to overstate. Because they could survive and divide indefinitely under the right conditions, they became useful for experiments that had previously been hard to standardize. HeLa cells were used in work connected to the polio vaccine, cancer research, virology, genetics, toxicology, and many other areas of medicine and biology. Over time they became one of the most heavily used human cell lines in the world, and they helped establish laboratory methods that shaped postwar biomedical research.

At the same time, Henrietta Lacks''s story became central to debates about ethics in medicine. The cells were taken and cultured without her knowledge or consent, which reflected common medical practice at the time but later came to be seen as a serious moral problem. Neither Lacks nor her family were compensated for the use of the cells, and her relatives did not learn for decades how widely HeLa had been distributed and commercialized. As genetic information about the cell line became more accessible, the case also raised questions about privacy, ownership, informed consent, and the treatment of tissue donors and their families.

For that reason, Henrietta Lacks is remembered not only for the scientific legacy of HeLa, but also for the ethical issues her case brought into public view. Her story sits at the intersection of medical progress, racial inequality, patient rights, and the history of research institutions. In later years she received increasing public recognition, and agreements were reached to give her family a greater voice in decisions about access to HeLa genomic data. Her legacy continues to be discussed because it connects a major scientific resource to the life of the person from whom it came and to the questions that resource continues to raise.',
  'https://en.wikipedia.org/wiki/Henrietta_Lacks?action=history',
  'This summary adapts Wikipedia content and is available under CC BY-SA 4.0.',
  'Medical history',
  2,
  'published',
  now()
)
on conflict (slug) do update set
  source_language = excluded.source_language,
  wikipedia_title = excluded.wikipedia_title,
  wikipedia_url = excluded.wikipedia_url,
  wikipedia_revision_id = excluded.wikipedia_revision_id,
  source_extract = excluded.source_extract,
  summary_text = excluded.summary_text,
  article_history_url = excluded.article_history_url,
  attribution_text = excluded.attribution_text,
  category = excluded.category,
  reading_minutes = excluded.reading_minutes,
  quality_status = excluded.quality_status,
  published_at = excluded.published_at;

insert into articles (
  slug,
  source_language,
  wikipedia_title,
  wikipedia_url,
  wikipedia_revision_id,
  source_extract,
  summary_text,
  article_history_url,
  attribution_text,
  category,
  reading_minutes,
  quality_status,
  published_at
) values (
  'john-frum',
  'en',
  'John Frum',
  'https://en.wikipedia.org/wiki/John_Frum',
  '1340499644',
  'John Frum is a figure associated with cargo cults on the island of Tanna in Vanuatu and is often depicted as an American World War II serviceman who will return with prosperity.',
  'John Frum is a figure associated with a cargo cult on the island of Tanna in Vanuatu. He is commonly described in local belief as a figure who will return and bring wealth, goods, and a transformed social order to his followers. In many versions he is imagined as an American serviceman connected with the Second World War, although the movement appears to have roots that predate the wartime arrival of American troops in the New Hebrides, as Vanuatu was then known. The name itself has been explained in several different ways, and scholars do not agree on a single origin.

The movement emerged in the late colonial period and was shaped by both indigenous religious practice and resistance to missionary and colonial authority. Some accounts present John Frum as a spirit or visionary figure, while others describe him as a local man using an adopted name. Followers were encouraged to reject aspects of European society such as money, missionary Christianity, plantation labor, and imported institutions, and to return instead to local customs and ritual life. In the early 1940s this led some followers to abandon churches, schools, and plantations and move inland to participate in feasts and ceremonies.

The term cargo cult is often used because the movement became especially associated with expectations that material goods would arrive from abroad. That expectation was strengthened during the Second World War, when large numbers of American troops and supplies passed through the region. After the war, some followers built symbolic landing strips and carried out military-style parades, hoping to encourage the return of planes and cargo. The annual observance of John Frum Day on 15 February, along with the ritual activities of the Tanna Army, became some of the most visible public expressions of the movement.

John Frum has remained important in anthropology and the study of religion because the movement brings together questions of colonialism, cultural change, prophetic belief, and the interpretation of material wealth. It has also had a political dimension in Vanuatu, especially where local custom and decentralized authority were seen as threatened by centralized government and missionary influence. Although the movement has declined significantly and now survives mainly in a smaller number of communities, it continues to be discussed as one of the best-known examples of a Melanesian revitalization movement shaped by both local tradition and foreign presence.',
  'https://en.wikipedia.org/wiki/John_Frum?action=history',
  'This summary adapts Wikipedia content and is available under CC BY-SA 4.0.',
  'Anthropology',
  2,
  'published',
  now()
)
on conflict (slug) do update set
  source_language = excluded.source_language,
  wikipedia_title = excluded.wikipedia_title,
  wikipedia_url = excluded.wikipedia_url,
  wikipedia_revision_id = excluded.wikipedia_revision_id,
  source_extract = excluded.source_extract,
  summary_text = excluded.summary_text,
  article_history_url = excluded.article_history_url,
  attribution_text = excluded.attribution_text,
  category = excluded.category,
  reading_minutes = excluded.reading_minutes,
  quality_status = excluded.quality_status,
  published_at = excluded.published_at;

insert into articles (
  slug,
  source_language,
  wikipedia_title,
  wikipedia_url,
  wikipedia_revision_id,
  source_extract,
  summary_text,
  article_history_url,
  attribution_text,
  category,
  reading_minutes,
  quality_status,
  published_at
) values (
  'nicaraguan-sign-language',
  'en',
  'Nicaraguan Sign Language',
  'https://en.wikipedia.org/wiki/Nicaraguan_Sign_Language',
  '1333921418',
  'Nicaraguan Sign Language is a sign language developed by deaf children in several schools in Nicaragua.',
  'Nicaraguan Sign Language, often abbreviated ISN, is a sign language that developed among deaf children in Nicaragua in the late twentieth century. It is notable because linguists were able to observe a new language emerging within a relatively short historical period rather than reconstructing that process indirectly from older evidence. Before the 1970s, many deaf Nicaraguans were isolated from one another and relied mainly on home sign systems used within their own families. The conditions changed when special-education programs in Managua began bringing deaf children together in larger numbers.

The first key institutions were established in 1977 and 1980, and by the early 1980s several hundred deaf students were attending the schools. Instruction initially emphasized spoken Spanish, lipreading, and limited fingerspelling, but students developed richer forms of communication with one another outside formal lessons. By combining gestures and elements of their individual home sign systems, they created a shared system that grew quickly in complexity. Researchers later distinguished an earlier stage often called LSN from the more fully developed ISN that emerged as younger children learned the system and extended its grammar.

This development attracted attention because the language did not simply copy an existing standard sign language. Linguists studying ISN observed that younger cohorts of signers used more systematic grammar than older ones, including clearer ways of marking spatial relationships and reference. That pattern became important in debates about language acquisition, because it suggested that children were not merely repeating what they had seen but actively regularizing and expanding the language as they learned it. For that reason, ISN became one of the most discussed modern cases in the study of how human language can emerge and stabilize within a community.

Nicaraguan Sign Language is also significant as a living language used by a deaf community rather than only as a research example. Its history reflects changes in education, social organization, and deaf community life in Nicaragua. At the same time, the language has been central to broader arguments in linguistics about grammar, critical periods in language learning, and the extent to which language-building capacities are present in the human mind. It remains important because it provides both a practical means of communication for its users and an unusually direct record of language formation in progress.',
  'https://en.wikipedia.org/wiki/Nicaraguan_Sign_Language?action=history',
  'This summary adapts Wikipedia content and is available under CC BY-SA 4.0.',
  'Linguistics',
  2,
  'published',
  now()
)
on conflict (slug) do update set
  source_language = excluded.source_language,
  wikipedia_title = excluded.wikipedia_title,
  wikipedia_url = excluded.wikipedia_url,
  wikipedia_revision_id = excluded.wikipedia_revision_id,
  source_extract = excluded.source_extract,
  summary_text = excluded.summary_text,
  article_history_url = excluded.article_history_url,
  attribution_text = excluded.attribution_text,
  category = excluded.category,
  reading_minutes = excluded.reading_minutes,
  quality_status = excluded.quality_status,
  published_at = excluded.published_at;

insert into articles (
  slug,
  source_language,
  wikipedia_title,
  wikipedia_url,
  wikipedia_revision_id,
  source_extract,
  summary_text,
  article_history_url,
  attribution_text,
  category,
  reading_minutes,
  quality_status,
  published_at
) values (
  'toki-pona',
  'en',
  'Toki Pona',
  'https://en.wikipedia.org/wiki/Toki_Pona',
  '1344082529',
  'Toki Pona is a philosophical and artistic constructed language designed for its small vocabulary, simplicity, and ease of acquisition.',
  'Toki Pona is a constructed language, meaning a language deliberately designed rather than one that developed naturally over time in a speech community. It was created by the Canadian translator Sonja Lang and first published online in 2001. The language is best known for its extreme minimalism: it uses a very small core vocabulary and a simple sound system, asking speakers to build more specific meanings through context and combinations of basic words. That design has made it one of the most recognizable modern constructed languages even though it was never intended to become a global auxiliary language.

Lang described Toki Pona as a philosophical and artistic project as much as a practical one. The language was created partly to simplify thought and communication by focusing on broad, near-universal concepts instead of highly specialized terms. In its standard form it has only around 120 to 137 commonly recognized words, depending on which source is used. Because the vocabulary is so small, speakers often express complex ideas indirectly, breaking them into simpler components rather than naming them with a single dedicated term.

That feature is what makes Toki Pona interesting to many learners and linguists. It serves as a compact experiment in how much can be communicated with very little vocabulary, and it encourages attention to framing, categorization, and context. The language is also associated with broader questions about whether language structure influences thought, though it was designed more as an exploration of that possibility than as a formal scientific test. Its grammar is intentionally simple, its pronunciation is relatively accessible, and several community-created writing systems and signed forms have grown around it.

Although small, the Toki Pona community has proved durable. Most activity takes place online, where speakers chat, translate texts, create literature, and discuss usage, but books, meetups, and original writing have also helped stabilize the language over time. Toki Pona remains notable because it is both a usable language and a disciplined exercise in reduction. It offers a clear example of how a tiny vocabulary can still support conversation, creativity, and a distinct cultural community.',
  'https://en.wikipedia.org/wiki/Toki_Pona?action=history',
  'This summary adapts Wikipedia content and is available under CC BY-SA 4.0.',
  'Constructed languages',
  2,
  'published',
  now()
)
on conflict (slug) do update set
  source_language = excluded.source_language,
  wikipedia_title = excluded.wikipedia_title,
  wikipedia_url = excluded.wikipedia_url,
  wikipedia_revision_id = excluded.wikipedia_revision_id,
  source_extract = excluded.source_extract,
  summary_text = excluded.summary_text,
  article_history_url = excluded.article_history_url,
  attribution_text = excluded.attribution_text,
  category = excluded.category,
  reading_minutes = excluded.reading_minutes,
  quality_status = excluded.quality_status,
  published_at = excluded.published_at;

insert into articles (
  slug,
  source_language,
  wikipedia_title,
  wikipedia_url,
  wikipedia_revision_id,
  source_extract,
  summary_text,
  article_history_url,
  attribution_text,
  category,
  reading_minutes,
  quality_status,
  published_at
) values (
  'green-children-of-woolpit',
  'en',
  'Green children of Woolpit',
  'https://en.wikipedia.org/wiki/Green_children_of_Woolpit',
  NULL,
  'The legend of the green children of Woolpit concerns two children of unusual skin colour who reportedly appeared in the village of Woolpit in Suffolk, England, sometime in the 12th century.',
  'The green children of Woolpit are figures from a medieval English legend recorded by near-contemporary chroniclers. According to the story, two children, a brother and sister with green skin, appeared in the Suffolk village of Woolpit sometime in the twelfth century. They spoke an unknown language, wore unfamiliar clothing, and at first would eat only raw broad beans. The episode has remained famous because it looks partly like a local miracle tale and partly like a mystery story, while surviving in sources close enough to the period to keep historians interested.

The main written accounts come from William of Newburgh and Ralph of Coggeshall, who described the children decades after the event was said to have occurred. Both versions agree on the broad outline: the children were taken in by local people, gradually adapted to ordinary food, and eventually lost the green colour of their skin. The boy died after a short time, but the girl survived, learned English, and said that she and her brother had come from a place sometimes called St Martin''s Land, where the light was like perpetual twilight. In one version of the tale, they reached Woolpit after becoming lost in a cave and following the sound of bells.

Because the story is so strange, explanations have long divided between folklore and historical reconstruction. One line of interpretation treats it as a folktale about visitors from an otherworld, similar to medieval stories about hidden realms reached through caves or underground passages. Another treats it as a distorted report of a real event, perhaps involving children from a foreign community whose language, clothing, and appearance seemed unfamiliar to local villagers. Modern writers have proposed possibilities ranging from malnutrition to cultural misunderstanding, but no explanation has become definitive.

The legend remains notable because it sits at the boundary between history, folklore, and literary imagination. It is not simply a modern ghost story projected backward; it belongs to a world in which chroniclers sometimes recorded marvels alongside political and religious events. That makes the tale useful not only as a mystery, but also as evidence of how medieval writers and readers understood the unusual. The green children continue to attract attention because the story is compact, vividly memorable, and open to several different kinds of reading without settling fully into any one of them.',
  'https://en.wikipedia.org/wiki/Green_children_of_Woolpit?action=history',
  'This summary adapts Wikipedia content and is available under CC BY-SA 4.0.',
  'Medieval folklore',
  2,
  'published',
  now()
)
on conflict (slug) do update set
  source_language = excluded.source_language,
  wikipedia_title = excluded.wikipedia_title,
  wikipedia_url = excluded.wikipedia_url,
  wikipedia_revision_id = excluded.wikipedia_revision_id,
  source_extract = excluded.source_extract,
  summary_text = excluded.summary_text,
  article_history_url = excluded.article_history_url,
  attribution_text = excluded.attribution_text,
  category = excluded.category,
  reading_minutes = excluded.reading_minutes,
  quality_status = excluded.quality_status,
  published_at = excluded.published_at;

insert into articles (
  slug,
  source_language,
  wikipedia_title,
  wikipedia_url,
  wikipedia_revision_id,
  source_extract,
  summary_text,
  article_history_url,
  attribution_text,
  category,
  reading_minutes,
  quality_status,
  published_at
) values (
  'alex-parrot',
  'en',
  'Alex',
  'https://en.wikipedia.org/wiki/Alex_(parrot)',
  '1332439470',
  'Alex was a grey parrot and the subject of a thirty-year experiment by animal psychologist Irene Pepperberg.',
  'Alex was a grey parrot studied for about thirty years by the animal psychologist Irene Pepperberg. He became famous because he was used in experiments about animal cognition, meaning research on how non-human animals perceive, categorize, remember, and communicate. Before work like Pepperberg''s became widely known, many researchers assumed that advanced symbolic understanding was largely limited to animals with large primate brains. Alex''s performances challenged that assumption and made him one of the best-known research animals in the study of language-like behavior.

Pepperberg began working with Alex after buying him from a pet shop when he was around a year old. Her training method did not treat him as a simple mimic. Instead, it used structured social interaction in which trainers modeled questions and answers around real objects, and Alex was rewarded with the object he had identified correctly. Over time he learned to label colors, shapes, materials, and numbers, and he appeared able to answer questions about what made objects similar or different. He was also reported to understand ideas such as bigger and smaller, same and different, and even the concept of zero in limited experimental contexts.

What made Alex especially interesting was not only the size of his vocabulary but the suggestion that he was using words with some understanding rather than merely copying sounds. Pepperberg reported that he could identify more than 50 objects and use over 100 words, and that he sometimes combined familiar words creatively when he lacked a standard label. The best-known example is his description of an apple as a "banerry", apparently blending banana and cherry. He also asked questions, requested preferred objects or locations, and sometimes showed signs of boredom, annoyance, or attempts to correct a situation when he thought a response or reward was wrong.

Alex''s case remains important because it helped push animal-cognition research toward more serious consideration of birds, especially parrots, as capable problem-solvers. At the same time, his work remained controversial, and some critics argued that his responses could still be explained through conditioning rather than genuine symbolic understanding. Even so, Alex became a landmark figure in the field because he made a difficult scientific question vivid to a wider public: how much of what humans call language, reasoning, and conceptual thought can appear in another species.',
  'https://en.wikipedia.org/wiki/Alex_(parrot)?action=history',
  'This summary adapts Wikipedia content and is available under CC BY-SA 4.0.',
  'Animal cognition',
  2,
  'published',
  now()
)
on conflict (slug) do update set
  source_language = excluded.source_language,
  wikipedia_title = excluded.wikipedia_title,
  wikipedia_url = excluded.wikipedia_url,
  wikipedia_revision_id = excluded.wikipedia_revision_id,
  source_extract = excluded.source_extract,
  summary_text = excluded.summary_text,
  article_history_url = excluded.article_history_url,
  attribution_text = excluded.attribution_text,
  category = excluded.category,
  reading_minutes = excluded.reading_minutes,
  quality_status = excluded.quality_status,
  published_at = excluded.published_at;

insert into articles (
  slug,
  source_language,
  wikipedia_title,
  wikipedia_url,
  wikipedia_revision_id,
  source_extract,
  summary_text,
  article_history_url,
  attribution_text,
  category,
  reading_minutes,
  quality_status,
  published_at
) values (
  'polybius',
  'en',
  'Polybius',
  'https://en.wikipedia.org/wiki/Polybius_(urban_legend)',
  '1344363732',
  'Polybius is an urban legend concerning a fictitious 1980s arcade game.',
  'Polybius is an urban legend about a mysterious arcade video game that supposedly appeared in Portland, Oregon, in 1981. According to the story, the game was abstract, highly addictive, and psychologically dangerous. Players were said to suffer effects such as seizures, amnesia, hallucinations, and night terrors, while shadowy "men in black" allegedly visited the arcade machines to collect data before the cabinets disappeared. The legend is notable because it combines several themes that fit the early arcade era: technological anxiety, conspiracy, and the idea that a game could affect the mind in hidden ways.

Despite those claims, there is no evidence that Polybius ever existed as a real commercial game. No verified cabinet has been found, no arcade trade documentation from the early 1980s mentions it, and there is no reliable record of the supposed publisher, Sinnesloschen. The earliest online reference appeared on coinop.org in the late 1990s, and the earliest known print reference was in GamePro in 2003. Later investigation suggested that even some of the early online dating around the legend had been fabricated, which strengthened the view that Polybius was a modern hoax or a rumor that took shape well after the period in which it was supposedly set.

The article links the legend to several real but unrelated events from the early 1980s. In Portland, two young arcade players became ill in separate incidents, and the FBI raided local arcades that had been involved in illegal gambling-machine conversions. More broadly, adults were already worried about the effects of arcade games on children, and there were scattered reports of seizures associated with video games. Rumors also circulated about strange arcade cabinets, government experiments, and hidden surveillance. Polybius appears to have gathered these separate fears into one story, while later memories of unusual real games and Atari''s secretive field-testing practices may have helped make the myth feel plausible.

Polybius has remained important less as a mystery to be solved than as a durable piece of video game folklore. It has been discussed in journalism, conspiracy culture, and studies of digital mythmaking, and it has inspired later games, films, music, and internet storytelling. The article treats it as an example of how modern legends form by attaching themselves to real places, real anxieties, and fragments of historical truth. In that sense, Polybius is notable not because a cabinet has ever been found, but because the story has proved so effective at preserving the atmosphere of early arcade culture.',
  'https://en.wikipedia.org/wiki/Polybius_(urban_legend)?action=history',
  'This summary adapts Wikipedia content and is available under CC BY-SA 4.0.',
  'Video game folklore',
  2,
  'published',
  now()
)
on conflict (slug) do update set
  source_language = excluded.source_language,
  wikipedia_title = excluded.wikipedia_title,
  wikipedia_url = excluded.wikipedia_url,
  wikipedia_revision_id = excluded.wikipedia_revision_id,
  source_extract = excluded.source_extract,
  summary_text = excluded.summary_text,
  article_history_url = excluded.article_history_url,
  attribution_text = excluded.attribution_text,
  category = excluded.category,
  reading_minutes = excluded.reading_minutes,
  quality_status = excluded.quality_status,
  published_at = excluded.published_at;

insert into articles (
  slug,
  source_language,
  wikipedia_title,
  wikipedia_url,
  wikipedia_revision_id,
  source_extract,
  summary_text,
  article_history_url,
  attribution_text,
  category,
  reading_minutes,
  quality_status,
  published_at
) values (
  'pig-war',
  'en',
  'Pig War',
  'https://en.wikipedia.org/wiki/Pig_War_(1859)',
  '1342674567',
  'The Pig War was a confrontation in 1859 between the United States and the United Kingdom over the British-U.S. border in the San Juan Islands, triggered by the shooting of a pig.',
  'The Pig War was a confrontation between the United States and the United Kingdom in 1859 over the boundary in the San Juan Islands, between Vancouver Island and what is now Washington state. Although it is called a war, it produced no human casualties. The name comes from the event that triggered the crisis: an American settler shot a pig owned by the British Hudson''s Bay Company. What made the incident important was that it took place in a territory whose sovereignty was genuinely disputed, so a quarrel over a wandering animal quickly became a test of national authority.

The deeper issue was ambiguity in the 1846 Oregon Treaty. The treaty said the border should run through the channel separating the continent from Vancouver Island, but there were two plausible waterways that might fit that description, Haro Strait and Rosario Strait. The choice mattered because it determined which country would control the strategically placed San Juan Islands. Both Britain and the United States believed the treaty supported their interpretation, and neither side was willing to give way. In the meantime, British commercial operations and American settlers were both active on the islands, increasing the chance of conflict.

The immediate crisis began when Lyman Cutlar, an American farmer on San Juan Island, found a pig rooting in his potato patch and shot it. The pig belonged to Charles Griffin of the Hudson''s Bay Company, and the dispute that followed escalated well beyond a compensation argument. American military forces were sent to the island, and British naval forces also gathered nearby. At one point hundreds of soldiers and multiple warships faced one another, and there was real concern that a local quarrel might turn into armed conflict between two major powers. Even so, commanders on both sides acted with enough restraint to avoid open battle.

The standoff eventually gave way to joint military occupation, with both countries maintaining a presence on the island while the dispute remained unresolved. In 1871 the matter was referred to arbitration by Kaiser Wilhelm I of Germany, who decided in favor of the United States, and the islands were formally awarded accordingly. The Pig War has remained famous because it shows how a minor rural dispute can expose much larger diplomatic tensions. It is also remembered as a rare example of a military confrontation that became historically famous not for bloodshed, but for how close it came to seriousness while being set off by something so ordinary.',
  'https://en.wikipedia.org/wiki/Pig_War_(1859)?action=history',
  'This summary adapts Wikipedia content and is available under CC BY-SA 4.0.',
  'Border disputes',
  2,
  'published',
  now()
)
on conflict (slug) do update set
  source_language = excluded.source_language,
  wikipedia_title = excluded.wikipedia_title,
  wikipedia_url = excluded.wikipedia_url,
  wikipedia_revision_id = excluded.wikipedia_revision_id,
  source_extract = excluded.source_extract,
  summary_text = excluded.summary_text,
  article_history_url = excluded.article_history_url,
  attribution_text = excluded.attribution_text,
  category = excluded.category,
  reading_minutes = excluded.reading_minutes,
  quality_status = excluded.quality_status,
  published_at = excluded.published_at;

insert into articles (
  slug,
  source_language,
  wikipedia_title,
  wikipedia_url,
  wikipedia_revision_id,
  source_extract,
  summary_text,
  article_history_url,
  attribution_text,
  category,
  reading_minutes,
  quality_status,
  published_at
) values (
  'john-davidson-activist',
  'en',
  'John Davidson',
  'https://en.wikipedia.org/wiki/John_Davidson_(activist)',
  '1344824059',
  'John Davidson is a Scottish activist and campaigner for Tourette syndrome who became known as the subject of the BBC documentary John''s Not Mad.',
  'John Davidson is a Scottish activist known for public education and advocacy around Tourette syndrome. Tourette syndrome is a neurological condition characterized by involuntary motor and vocal tics, and in a smaller number of cases it can include involuntary swearing or other socially disruptive vocalizations. Davidson became widely known in Britain as a teenager through the 1989 BBC documentary John''s Not Mad, which showed how severely Tourette''s affected his daily life. The program made him a familiar public figure, but it also exposed him to years of ridicule from people who treated the documentary as a source of spectacle rather than understanding.

Instead of disappearing from public life after that experience, Davidson turned it into long-term advocacy work. He remained based in Galashiels, worked as a caretaker and youth worker, and became a nationally recognized spokesman for people living with Tourette syndrome. Over time he gave talks in schools, spoke with teachers and police, worked with organizations such as Tourette Scotland and Tourettes Action, and helped run a residential camp where young people with Tourette''s could meet others with similar experiences. In 2019 he was appointed an MBE for services to people with Tourette syndrome.

Davidson''s public role has often been shaped by television. The BBC returned to his story in multiple follow-up documentaries, allowing viewers to see how his life changed over time rather than leaving him frozen as a single sensational image from adolescence. That long documentary record made him unusual among disability campaigners: many people first encountered him through involuntary tics that were easy to mock, then later came to understand him as an advocate, community organizer, and educator. His life in public has therefore been tied not only to awareness of Tourette''s itself, but also to changing attitudes about how disability is represented in media.

That dynamic came back into view in 2026 after a widely discussed incident at the BAFTAs, where Davidson''s audible vocal tics during the ceremony prompted controversy, apology, and debate about inclusion, disability, and the responsibilities of broadcasters and event organizers. The episode renewed public attention to a problem that had run through his story from the beginning: involuntary behavior can be instantly misread as intention, especially when it happens in a high-profile setting. Davidson remains significant because his life has repeatedly forced public audiences to confront the difference between spectacle and understanding in how neurological conditions are seen.',
  'https://en.wikipedia.org/wiki/John_Davidson_(activist)?action=history',
  'This summary adapts Wikipedia content and is available under CC BY-SA 4.0.',
  'Disability advocacy',
  2,
  'published',
  now()
)
on conflict (slug) do update set
  source_language = excluded.source_language,
  wikipedia_title = excluded.wikipedia_title,
  wikipedia_url = excluded.wikipedia_url,
  wikipedia_revision_id = excluded.wikipedia_revision_id,
  source_extract = excluded.source_extract,
  summary_text = excluded.summary_text,
  article_history_url = excluded.article_history_url,
  attribution_text = excluded.attribution_text,
  category = excluded.category,
  reading_minutes = excluded.reading_minutes,
  quality_status = excluded.quality_status,
  published_at = excluded.published_at;

insert into articles (
  slug,
  source_language,
  wikipedia_title,
  wikipedia_url,
  wikipedia_revision_id,
  source_extract,
  summary_text,
  article_history_url,
  attribution_text,
  category,
  reading_minutes,
  quality_status,
  published_at
) values (
  'wow-signal',
  'en',
  'Wow! signal',
  'https://en.wikipedia.org/wiki/Wow!_signal',
  '1344467426',
  'The Wow! signal was a strong narrowband radio signal detected on August 15, 1977, by Ohio State University''s Big Ear radio telescope.',
  'The Wow! signal was a strong narrowband radio signal detected on 15 August 1977 by Ohio State University''s Big Ear radio telescope while it was being used for the search for extraterrestrial intelligence, or SETI. A narrowband signal occupies a very small slice of the radio spectrum, which made the event interesting because many natural radio sources are broader. The signal appeared near the hydrogen line, a frequency long discussed in SETI as a plausible place for an interstellar transmission. When astronomer Jerry R. Ehman later spotted the unusual reading in a computer printout, he circled it and wrote "Wow!", giving the signal its name.

The famous string "6EQUJ5" was not a coded message sent from space. It was the observatory''s internal way of recording how the signal''s intensity changed during the 72 seconds that the telescope could observe that part of the sky. Big Ear did not track objects directly; instead, Earth''s rotation carried the signal through the telescope''s field of view. Because of the observatory''s design, the source can be assigned only to one of two nearby positions in the direction of Sagittarius rather than to a single exact point.

What made the signal so memorable was the combination of strength, frequency, and brevity. It seemed to fit some expected characteristics of an artificial transmission, yet it appeared only once. Follow-up observations by Ehman, Big Ear, the Very Large Array, and other radio telescopes never found a recurrence. Over the years, researchers considered explanations involving terrestrial interference, reflected Earth signals, comets, and unusual astrophysical events, but none has been confirmed. The lack of repetition makes every interpretation uncertain, including the extraterrestrial one.

The Wow! signal remains important because it is one of the clearest examples of how a single unresolved observation can shape scientific and public imagination. It occupies a middle ground between evidence and mystery: strong enough to invite serious analysis, but too isolated to support a firm conclusion. For that reason it is still discussed in astronomy and SETI history as a benchmark case in the difficulty of interpreting rare signals. Its lasting significance comes not from proving contact with another civilization, but from showing how little data can still leave a large scientific question open.',
  'https://en.wikipedia.org/wiki/Wow!_signal?action=history',
  'This summary adapts Wikipedia content and is available under CC BY-SA 4.0.',
  'SETI',
  2,
  'published',
  now()
)
on conflict (slug) do update set
  source_language = excluded.source_language,
  wikipedia_title = excluded.wikipedia_title,
  wikipedia_url = excluded.wikipedia_url,
  wikipedia_revision_id = excluded.wikipedia_revision_id,
  source_extract = excluded.source_extract,
  summary_text = excluded.summary_text,
  article_history_url = excluded.article_history_url,
  attribution_text = excluded.attribution_text,
  category = excluded.category,
  reading_minutes = excluded.reading_minutes,
  quality_status = excluded.quality_status,
  published_at = excluded.published_at;

insert into articles (
  slug,
  source_language,
  wikipedia_title,
  wikipedia_url,
  wikipedia_revision_id,
  source_extract,
  summary_text,
  article_history_url,
  attribution_text,
  category,
  reading_minutes,
  quality_status,
  published_at
) values (
  'victor-of-aveyron',
  'en',
  'Victor of Aveyron',
  'https://en.wikipedia.org/wiki/Victor_of_Aveyron',
  '1342451757',
  'Victor of Aveyron was a French feral child who was found around the age of 9 and later studied by Jean Marc Gaspard Itard.',
  'Victor of Aveyron was a feral child, meaning a child thought to have grown up for a long period outside ordinary human society and language. He was found in southern France around the turn of the nineteenth century after being seen repeatedly in the woods and captured several times. He became one of the most famous cases of this kind and, more importantly, one of the best documented. Because so much was written about him soon after his discovery, his case has remained central to debates about language, education, and what human development depends on socially.

When Victor was finally taken into sustained care in 1800, observers noted that he did not speak, seemed indifferent to many social conventions, and showed habits that suggested a long period of isolation. Reports described his preference for simple foods, his repeated attempts to escape back into the countryside, and the scars on his body. People who encountered him tried to determine whether he had been abandoned, had survived alone, or had lived in some other unusual circumstance. The historical record never resolved exactly how he came to live apart from society, but it made clear that he entered public attention as an extreme and puzzling case.

Victor was eventually studied by the physician Jean Marc Gaspard Itard, who took charge of his education for several years. Itard wanted to discover whether Victor could be taught language, social behavior, and emotional responsiveness. Victor did make some progress: he learned routines, showed attachment to caregivers, and gained limited understanding of words and written signs. But he never fully acquired ordinary speech. Those results became influential because they suggested both the power and the limits of late intervention in a child who had passed through crucial early years without normal linguistic and social experience.

Victor''s case has remained important in the history of psychology, special education, and language theory. It helped shape early attempts to educate children with developmental differences, and it also raised larger questions about the relation between nature and nurture. Later writers returned to the case when discussing critical periods in language learning and the role of social contact in becoming recognizably human in the cultural sense. Victor of Aveyron therefore matters not only as a historical curiosity, but as a case that forced physicians, educators, and philosophers to define what they thought education and humanity could achieve.',
  'https://en.wikipedia.org/wiki/Victor_of_Aveyron?action=history',
  'This summary adapts Wikipedia content and is available under CC BY-SA 4.0.',
  'History of psychology',
  2,
  'published',
  now()
)
on conflict (slug) do update set
  source_language = excluded.source_language,
  wikipedia_title = excluded.wikipedia_title,
  wikipedia_url = excluded.wikipedia_url,
  wikipedia_revision_id = excluded.wikipedia_revision_id,
  source_extract = excluded.source_extract,
  summary_text = excluded.summary_text,
  article_history_url = excluded.article_history_url,
  attribution_text = excluded.attribution_text,
  category = excluded.category,
  reading_minutes = excluded.reading_minutes,
  quality_status = excluded.quality_status,
  published_at = excluded.published_at;

insert into articles (
  slug,
  source_language,
  wikipedia_title,
  wikipedia_url,
  wikipedia_revision_id,
  source_extract,
  summary_text,
  article_history_url,
  attribution_text,
  category,
  reading_minutes,
  quality_status,
  published_at
) values (
  'christmas-truce',
  'en',
  'Christmas truce',
  'https://en.wikipedia.org/wiki/Christmas_truce',
  '1341820781',
  'The Christmas truce was a series of widespread unofficial ceasefires mainly along the Western Front of the First World War around Christmas 1914.',
  'The Christmas truce was a series of unofficial ceasefires that took place around Christmas 1914, mainly along parts of the Western Front in the First World War. The war had begun only five months earlier, but the front had already settled into trench warfare and stalemate. In that setting, soldiers from opposing armies in some sectors stopped shooting long enough to exchange greetings, speak across the lines, and, in a number of cases, meet in no man''s land. The event became famous because it showed a temporary breakdown in the logic of total war at the level of ordinary soldiers rather than political leaders.

The truces did not happen everywhere and did not unfold in exactly the same way in every sector. In some places men merely called seasonal wishes to one another from the trenches. In others they met between the lines, exchanged food, tobacco, alcohol, and small souvenirs, and arranged temporary pauses so that dead bodies could be buried. There were episodes of shared singing and carolling, and some accounts describe football matches, though those have often been simplified in later retellings. What the episodes had in common was that they were informal, local, and dependent on mutual restraint rather than official negotiation.

The truce was made possible by the particular conditions of late 1914. Troops had endured months of heavy fighting, but command structures were not yet as hardened against fraternization as they later became. Soldiers in opposing trenches were often close enough to hear and recognize one another, and a broader "live and let live" pattern had already emerged in some areas, with tacit understandings that reduced pointless exposure to fire. After 1914, commanders on both sides moved more aggressively to prevent such contacts, and as casualties mounted the appetite for fraternization declined sharply.

The Christmas truce remains significant because it is one of the clearest examples of how combatants can temporarily step outside military discipline without ending a war itself. It has often been remembered sentimentally, but historically it is better understood as a brief and uneven suspension of violence within a conflict that quickly resumed. Its importance lies in what it reveals about trench warfare: men could recognize their enemies as fellow human beings while still being drawn back into an industrial war governed by orders, logistics, and attrition. For that reason, the truce has remained a powerful episode in the historical memory of the First World War.',
  'https://en.wikipedia.org/wiki/Christmas_truce?action=history',
  'This summary adapts Wikipedia content and is available under CC BY-SA 4.0.',
  'World War I',
  2,
  'published',
  now()
)
on conflict (slug) do update set
  source_language = excluded.source_language,
  wikipedia_title = excluded.wikipedia_title,
  wikipedia_url = excluded.wikipedia_url,
  wikipedia_revision_id = excluded.wikipedia_revision_id,
  source_extract = excluded.source_extract,
  summary_text = excluded.summary_text,
  article_history_url = excluded.article_history_url,
  attribution_text = excluded.attribution_text,
  category = excluded.category,
  reading_minutes = excluded.reading_minutes,
  quality_status = excluded.quality_status,
  published_at = excluded.published_at;

insert into articles (
  slug,
  source_language,
  wikipedia_title,
  wikipedia_url,
  wikipedia_revision_id,
  source_extract,
  summary_text,
  article_history_url,
  attribution_text,
  category,
  reading_minutes,
  quality_status,
  published_at
) values (
  'tanganyika-laughter-epidemic',
  'en',
  'Tanganyika laughter epidemic',
  'https://en.wikipedia.org/wiki/Tanganyika_laughter_epidemic',
  '1344663410',
  'The Tanganyika laughter epidemic of 1962 was an outbreak of mass psychogenic illness near Kashasha in Tanganyika.',
  'The Tanganyika laughter epidemic was an outbreak of mass psychogenic illness reported in 1962 in what was then Tanganyika, now part of Tanzania. Mass psychogenic illness refers to the spread of physical or behavioral symptoms through a group without a conventional infectious cause. The episode began at a mission-run girls'' boarding school in Kashasha near Lake Victoria, where laughing attacks spread among students and disrupted normal school life. Although it is remembered mainly for laughter, reports also described crying, restlessness, pain, fainting, and difficulty concentrating.

The outbreak began with a small number of girls and spread through much of the school population. Teachers were reportedly unaffected, but the symptoms among students became disruptive enough that the school was closed. When pupils returned home, similar episodes appeared in nearby villages and later in other schools in the region. Over the course of roughly eighteen months, around a thousand people were said to have been affected and multiple schools were temporarily shut down. The pattern made the event notable not because laughter itself was medically mysterious, but because of how visibly the behavior moved through connected communities.

Most interpretations have emphasized stress and social conditions rather than disease. Tanganyika had recently become independent, and later commentators suggested that students were under new pressures from school, family expectations, and broader cultural change. Some writers treated the epidemic as a culture-specific expression of tension among adolescents in strict educational settings. Others described it as a classic case of social contagion, in which symptoms spread through imitation, suggestion, and group vulnerability. In this view, the event was real in its effects without requiring a biological pathogen as the cause.

The Tanganyika laughter epidemic remains an important case because it is often used to explain how social stress can be expressed collectively through the body. It also shows why the phrase "mass hysteria" can be misleading if it suggests that nothing meaningful happened: schools closed, lives were interrupted, and local institutions had to respond to a phenomenon they could not manage easily. The case is still discussed in psychology, sociology, and the history of medicine because it illustrates how symptoms can spread through communities at moments of uncertainty, especially among people with little power over the conditions creating that stress.',
  'https://en.wikipedia.org/wiki/Tanganyika_laughter_epidemic?action=history',
  'This summary adapts Wikipedia content and is available under CC BY-SA 4.0.',
  'Mass psychogenic illness',
  2,
  'published',
  now()
)
on conflict (slug) do update set
  source_language = excluded.source_language,
  wikipedia_title = excluded.wikipedia_title,
  wikipedia_url = excluded.wikipedia_url,
  wikipedia_revision_id = excluded.wikipedia_revision_id,
  source_extract = excluded.source_extract,
  summary_text = excluded.summary_text,
  article_history_url = excluded.article_history_url,
  attribution_text = excluded.attribution_text,
  category = excluded.category,
  reading_minutes = excluded.reading_minutes,
  quality_status = excluded.quality_status,
  published_at = excluded.published_at;

insert into articles (
  slug,
  source_language,
  wikipedia_title,
  wikipedia_url,
  wikipedia_revision_id,
  source_extract,
  summary_text,
  article_history_url,
  attribution_text,
  category,
  reading_minutes,
  quality_status,
  published_at
) values (
  'beale-ciphers',
  'en',
  'Beale ciphers',
  'https://en.wikipedia.org/wiki/Beale_ciphers',
  '1331636074',
  'The Beale ciphers are a set of three ciphertexts, one of which allegedly states the location of a buried treasure.',
  'The Beale ciphers are a set of three ciphertexts that allegedly describe the location of a buried treasure of gold, silver, and jewels somewhere in Virginia. The story became public in 1885 through a pamphlet called The Beale Papers, which claimed that an adventurer named Thomas J. Beale had hidden the treasure after mining precious metals in the American West. According to the pamphlet, one cipher gives the location, one describes the treasure, and one names the owners and their heirs. Only the second message has ever been deciphered, which is one reason the story has endured in American treasure lore.

In the pamphlet''s account, Beale left an iron box with an innkeeper in Lynchburg, Virginia, along with instructions that it should be opened only if he failed to return. When the promised key never arrived, the box eventually passed to another man, who reportedly solved the second message by using the United States Declaration of Independence as a key for a book cipher. That decoded text listed the supposed contents of the treasure in impressive detail. The first and third ciphertexts, however, remained unsolved, leaving the alleged hiding place and the beneficiaries unidentified.

The main difficulty with the Beale ciphers is that the historical basis of the entire story is heavily disputed. The pamphlet is the only primary source for much of the narrative, and later investigators found substantial reasons to doubt that Thomas J. Beale existed as described. Cryptographic and historical criticism has suggested that the story may have been a hoax created or shaped by James B. Ward, the man who published the pamphlet. Because of those doubts, the Beale ciphers are important not simply as unsolved codes, but as an example of how mystery, weak documentation, and the prestige of cryptography can reinforce one another.

The Beale ciphers remain famous because they sit between codebreaking history and treasure legend. They continue to attract amateur solvers, treasure hunters, and skeptics, each treating the unresolved texts as either a challenge or evidence of fabrication. Even if the treasure story is fictional, the ciphers have had a long cultural life as one of the best-known American examples of an unsolved code. Their significance therefore lies less in any verified buried fortune than in the durability of the puzzle itself and the way it invites belief despite uncertain historical foundations.',
  'https://en.wikipedia.org/wiki/Beale_ciphers?action=history',
  'This summary adapts Wikipedia content and is available under CC BY-SA 4.0.',
  'Cryptography folklore',
  2,
  'published',
  now()
)
on conflict (slug) do update set
  source_language = excluded.source_language,
  wikipedia_title = excluded.wikipedia_title,
  wikipedia_url = excluded.wikipedia_url,
  wikipedia_revision_id = excluded.wikipedia_revision_id,
  source_extract = excluded.source_extract,
  summary_text = excluded.summary_text,
  article_history_url = excluded.article_history_url,
  attribution_text = excluded.attribution_text,
  category = excluded.category,
  reading_minutes = excluded.reading_minutes,
  quality_status = excluded.quality_status,
  published_at = excluded.published_at;

insert into articles (
  slug,
  source_language,
  wikipedia_title,
  wikipedia_url,
  wikipedia_revision_id,
  source_extract,
  summary_text,
  article_history_url,
  attribution_text,
  category,
  reading_minutes,
  quality_status,
  published_at
) values (
  'gardner-museum-theft',
  'en',
  'Gardner Museum theft',
  'https://en.wikipedia.org/wiki/Isabella_Stewart_Gardner_Museum_theft',
  '1344900247',
  'In the early hours of March 18, 1990, 13 works of art were stolen from the Isabella Stewart Gardner Museum in Boston.',
  'The Isabella Stewart Gardner Museum theft was a major art robbery carried out in Boston in the early hours of 18 March 1990. Two men disguised as police officers gained entry to the museum, overpowered the guards, and spent more than an hour stealing 13 works of art. No arrests have ever been made and none of the works has been recovered. Because of the cultural importance of the stolen objects and their enormous estimated value, the case is widely described as one of the largest unsolved art thefts in history.

The thieves were admitted after telling the guards they were responding to a disturbance. Once inside, they handcuffed and restrained the guards in the basement and then moved through the galleries selecting works from the museum''s collection. Among the stolen pieces were Vermeer''s The Concert and Rembrandt''s The Storm on the Sea of Galilee, the artist''s only known seascape. The theft was made easier by weak security: recommended upgrades had not been implemented, guard pay was low, and the museum''s vulnerabilities were known well enough that later accounts treated them as part of the story rather than a minor background detail.

The investigation has lasted for decades and has generated many theories, including links to organized crime in New England and the Mid-Atlantic. Federal investigators have identified possible criminal networks and periods in which the works may have changed hands, but the case has never reached a point where charges produced recoveries. The museum has continued to publicize the missing works and to offer a large reward for information leading to their return. The empty frames were long left hanging in some galleries, turning the absence itself into part of the museum''s public memory of the theft.

The case remains important for more than its price tag. It is a reminder that museum collections are vulnerable not only to dramatic outside attacks but also to institutional underinvestment in security. It also shows how works of art can acquire a second historical life once they disappear, becoming famous as missing objects rather than only as paintings. The Gardner Museum theft continues to draw attention because it joins crime history, art history, and unresolved investigation in a way that has never been satisfactorily concluded.',
  'https://en.wikipedia.org/wiki/Isabella_Stewart_Gardner_Museum_theft?action=history',
  'This summary adapts Wikipedia content and is available under CC BY-SA 4.0.',
  'Art crime',
  2,
  'published',
  now()
)
on conflict (slug) do update set
  source_language = excluded.source_language,
  wikipedia_title = excluded.wikipedia_title,
  wikipedia_url = excluded.wikipedia_url,
  wikipedia_revision_id = excluded.wikipedia_revision_id,
  source_extract = excluded.source_extract,
  summary_text = excluded.summary_text,
  article_history_url = excluded.article_history_url,
  attribution_text = excluded.attribution_text,
  category = excluded.category,
  reading_minutes = excluded.reading_minutes,
  quality_status = excluded.quality_status,
  published_at = excluded.published_at;

insert into articles (
  slug,
  source_language,
  wikipedia_title,
  wikipedia_url,
  wikipedia_revision_id,
  source_extract,
  summary_text,
  article_history_url,
  attribution_text,
  category,
  reading_minutes,
  quality_status,
  published_at
) values (
  'caesars-comet',
  'en',
  'Caesar''s Comet',
  'https://en.wikipedia.org/wiki/Caesar%27s_Comet',
  '1343796234',
  'Caesar''s Comet was a seven-day cometary appearance seen in July 44 BC and interpreted by Romans as a sign of Julius Caesar''s deification.',
  'Caesar''s Comet was a spectacular cometary appearance seen in 44 BC, a few months after the assassination of Julius Caesar. Ancient Romans associated it so strongly with Caesar that it became known as the Sidus Iulium, or Julian Star. Contemporary observers treated it not simply as an astronomical event but as a sign that Caesar had been raised to divine status. That interpretation gave the comet an importance in Roman public life far beyond its brief appearance in the sky.

Ancient accounts describe the comet as appearing for seven successive days during games held in honor of Caesar. For a long time scholars thought the relevant festival took place in September, but later work shifted the dating to July of the same year, much closer to Caesar''s death. The Roman writer Suetonius says people believed the comet represented Caesar''s soul. The timing mattered politically: Augustus, Caesar''s adopted heir, used the phenomenon as part of the broader effort to present Caesar as a deified figure and to connect his own rule to that divine legacy.

Modern attempts to reconstruct the comet as an astronomical object are much less certain than its political meaning. The surviving evidence is sparse, and the orbit can only be estimated from a small number of ancient reports, including one Chinese observation and the Roman tradition. Even so, modern calculations suggest that the comet passed close to the Sun and then underwent a dramatic brightening in late July. At its peak it may have shone with a brilliance comparable to Venus, which helps explain why it left such a strong impression in literary and historical sources.

The comet remained important in Roman memory because it was absorbed into symbols of power. Augustus promoted the image of the star or comet in monuments, cult practice, and coinage tied to the new imperial order. Later Roman coins increasingly treated the celestial sign as an emblem of the divine Julius Caesar rather than as a neutral astronomical object. Caesar''s Comet therefore matters both as a rare ancient sky event and as an example of how natural phenomena could be drawn into religion, public memory, and state propaganda.',
  'https://en.wikipedia.org/wiki/Caesar%27s_Comet?action=history',
  'This summary adapts Wikipedia content and is available under CC BY-SA 4.0.',
  'Roman history',
  2,
  'published',
  now()
)
on conflict (slug) do update set
  source_language = excluded.source_language,
  wikipedia_title = excluded.wikipedia_title,
  wikipedia_url = excluded.wikipedia_url,
  wikipedia_revision_id = excluded.wikipedia_revision_id,
  source_extract = excluded.source_extract,
  summary_text = excluded.summary_text,
  article_history_url = excluded.article_history_url,
  attribution_text = excluded.attribution_text,
  category = excluded.category,
  reading_minutes = excluded.reading_minutes,
  quality_status = excluded.quality_status,
  published_at = excluded.published_at;
