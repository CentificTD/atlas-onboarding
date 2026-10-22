
/* ══════════════════════════════════════════════════════════════════════════
   ATLAS CONTENT BLOCK. EDIT HERE. (Training content lives only in this block.)

   HOW TO EDIT (read me first)
   1. Module text: each module below has a  body:  field. Replace the [PLACEHOLDER]
      blocks with the real training content. Plain HTML is fine:
        <h2>Heading</h2>  <p>Paragraph</p>  <ul><li>Bullet</li></ul>  <strong>bold</strong>
      Callout box:  <div class="callout"><div class="c-ic">&#9432;</div><div class="c-tx">Text</div></div>
      Script box (what to say):  <div class="script">"Words the moderator says."</div>
   2. Each body is one text string in single quotes. Two rules keep the file working:
        a) Never type a backtick or the two characters dollar-brace inside body text.
        b) Never type a plain apostrophe ' inside body text. Write &rsquo; instead (don&rsquo;t, moderator&rsquo;s) or put a backslash before it.
           Curly quotes: &ldquo; and &rdquo;. Dash: &ndash;. Double quotes " are fine.
      To write a long body over several lines, end each line with ' and start the next with + ' like this:
        body: '<h2>Heading</h2>'
            + '<p>First paragraph.</p>'
            + '<ul><li>Point one</li><li>Point two</li></ul>',
      Replace the whole  phBody('...')  call with your own string. The comma after the closing quote stays.
   3. Video that plays inside the module (moderators never leave the app): put this in the body, replacing the video placeholder box
        <div class="video-embed"><iframe src="EMBED LINK" title="Video title" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
      EMBED LINK must be the EMBED address, never the normal page or Share link. A normal link makes the box blank or opens another site.
      YouTube: https://www.youtube.com/embed/VIDEOID   Vimeo: https://player.vimeo.com/video/VIDEOID
      SharePoint or Stream: open the video, choose Share, then Embed, and copy the address inside src="..." of the code it gives you.
      A video file (.mp4) at a direct web address plays with:  <div class="video-embed"><video controls playsinline preload="metadata" src="https://.../file.mp4"></video></div>
      Never use a plain link for a video in the body, because a link takes the moderator away from the app.
      Opening index.html straight from your computer can make some players (YouTube especially) refuse to play. Test videos from the hosted web address.
   4. Questions. Every question is one entry with a unique id that is never reused:
        {id:"m_hours_1", q:"Question text", opts:["Option A","Option B","Option C","Option D"], a:2}
      a is the number of the correct option (0 = first, 1 = second, 2 = third, 3 = fourth). The app shuffles the options for every
      moderator, so put the correct answer anywhere. Never write "all of the above", "none of the above", "both A and B" or similar.
      Keep wrong answers about the same length as the right one.
      Module checks (MOD_QUESTIONS_DEFAULT, one list per module id): 6 to 7 questions, ids m_<moduleid>_<number>.
      Final assessment (FINAL_CHECK_DEFAULT) is a BANK: each attempt draws 40 questions at random. Give each question  mod:"<moduleid>"
      so every topic is covered (at least 3 per topic in every attempt). Questions must test project information, never how the app works.
      Aim for 80 to 120 or more questions, with at least 8 to 10 for every module the final should test.
   5. Do NOT change any  id:  value, and do not delete a module. Title, subtitle, minutes and body are yours.
      "gate":"none" = no check, learner presses a button to mark it complete.  "gate":"check" = knowledge check.
   6. Pass marks, final attempts, answer-locking rules, review-page rules and the lockout contact are the constants at the bottom of this block.
   7. Resources tab (moderators): edit the RESOURCES list at the bottom of this block. One line per link:
        {group:"Tools", kind:"tool", title:"Name shown", desc:"One short line", url:"https://..."}
      kind is tool, document, sharepoint or link (it only picks the icon). Groups appear in the order you first use them.
      Leave url empty and the card shows "Link coming soon". Only links starting with https:// or http:// are opened.
   8. Add a new module: copy one whole line of ATLAS_MODULES, paste it where the module should sit (the order of the list is the
      order moderators see), then change the id, ic, title, sub, min and body. The new id must be unique: lowercase letters and
      underscores only, no spaces, never reused. Use "gate":"check" for a knowledge check or "gate":"none" with a "cta" button label.
      If it has a check, also add a line for the same id in MOD_QUESTIONS_DEFAULT, for example  newid: [ {q:"...", opts:["A","B","C","D"], a:0}, ... ],
      A module with "gate":"check" needs its questions here, otherwise the check will be empty. Commas matter: every line in the list ends with a comma except the last.
      The Learning Path, the module count, the total minutes and the admin Curriculum tab all update on their own.
   9. Search: moderators can search module text section by section. Give each topic its own <h2> heading that says what it is about,
      and keep the key words in the text itself (not only in an image or video). Search never looks at questions or answers.
   Anything still showing [PLACEHOLDER] on screen has not been replaced yet.
   ══════════════════════════════════════════════════════════════════════════ */

function phBody(title){
  return '<div class="awaiting"><div class="a-ic">&#9998;</div><div class="a-tx"><strong>[PLACEHOLDER] ' + title + ' content.</strong> Replace this block with the training text for this module.</div></div>'
    + '<h2>[PLACEHOLDER] Section heading</h2>'
    + '<p>[PLACEHOLDER] Paragraph text. Explain the topic in plain language.</p>'
    + '<ul><li>[PLACEHOLDER] Key point one</li><li>[PLACEHOLDER] Key point two</li><li>[PLACEHOLDER] Key point three</li></ul>'
    + '<div class="video-fallback"><div style="font-size:22px">&#9654;</div><div>[PLACEHOLDER] Training video goes here</div></div>'
    + '<div class="callout"><div class="c-ic">&#9432;</div><div class="c-tx"><strong>[PLACEHOLDER] Callout.</strong> Use for a rule or reminder that must not be missed.</div></div>';
}
function phQuestions(n, topic){
  var out = [], letters = ['A','B','C','D'];
  for(var i = 0; i < n; i++){
    var right = i % 4;
    out.push({
      q: '[PLACEHOLDER] Question ' + (i + 1) + ' about ' + topic + '. Replace with the real question.',
      opts: letters.map(function(L, k){ return '[PLACEHOLDER] Answer ' + L + (k === right ? ' (the correct one in this placeholder)' : ''); }),
      a: right
    });
  }
  return out;
}

// Module 1 text, written for moderators: how to use this app. If a button or tab is renamed in the app, update the quoted names below.
// The first paragraph is a placeholder for Ingrid to describe the project itself; the rest is final.
var WELCOME_BODY =
    '<h2>About Project Atlas</h2>'
  + '<p>Atlas is an indoor 3D scanning project. You travel to assigned residential homes and capture spatial and visual data of the interior using a rig of five smartphones recording at the same time. On each floor you walk a slow, continuous loop while all five devices record: once with curtains or blinds open under natural daylight, and once with them closed under indoor lighting. That data trains AI models for indoor scene understanding and 3D floor plan reconstruction.</p>'
  + '<p>You work solo. You are the person who meets the resident at the door, introduces yourself, explains what is going to happen, walks them through the rooms and the scenarios, prepares each floor, runs every scan, enters the metadata, checks your own work, and verifies the upload before you leave. There is no second moderator and no separate QA moderator on Atlas.</p>'
  + '<div class="callout danger"><div class="c-ic">&#9888;</div><div class="c-tx"><strong>No people are ever captured on Atlas.</strong> You are scanning rooms, not people. The resident, anyone else in the home, and all pets stay off the floor you are scanning, for every single walk. If a person or animal enters the floor mid-walk, the walk is void and you re-record it from the start.</div></div>'
  + '<p>All Atlas collection happens at participant homes. Centific HQ in Redmond is used for your in-person training only, never for collection.</p>'
  + '<h2>How this onboarding works</h2>'
  + '<p>You will complete a short series of modules, one after another. Each module teaches one part of the moderator role. Most modules end with a knowledge check. When you have finished every module, you take one final assessment. Passing it completes your onboarding.</p>'
  + '<h2>Step by step</h2>'
  + '<ol>'
  + '<li><strong>Start on the Learning Path tab.</strong> It lists every module in order. The next module you can open is highlighted. Modules further down are locked until you finish the one before.</li>'
  + '<li><strong>Open a module and read it.</strong> Take your time. You can scroll back up at any point.</li>'
  + '<li><strong>Press &ldquo;Start knowledge check&rdquo; when you reach the end.</strong> Some modules, like this one, have no check. For those, press &ldquo;Mark complete&rdquo; instead.</li>'
  + '<li><strong>Answer one question at a time.</strong> Select your answer. If it is wrong, you can try again until you get it right, but only your first pick counts toward your score. Press &ldquo;Next question&rdquo;, and press &ldquo;Finish check&rdquo; on the last one.</li>'
  + '<li><strong>See your result.</strong> The screen shows your score. Module checks have no pass mark, so you can always continue. Your score is recorded, and you can press &ldquo;Retry the check&rdquo; to go through the questions again.</li>'
  + '<li><strong>Press &ldquo;Continue to next module&rdquo;</strong> once you have finished the check.</li>'
  + '</ol>'
  + '<div class="callout"><div class="c-ic">&#9432;</div><div class="c-tx"><strong>Only your first pick counts.</strong> Read each question and every answer choice before you choose.</div></div>'
  + '<h2>The final assessment</h2>'
  + '<p>The final assessment unlocks after the last module. It has more questions than a module check and a limited number of attempts, which the screen shows before you begin. Your time starts when you press &ldquo;Begin&rdquo;, so only begin when you are ready to finish in one sitting. If you use all your attempts, the screen tells you who to contact.</p>'
  + '<h2>Your time is recorded</h2>'
  + '<p>The app records the time you actively spend in each module. You can see your own timer at the top of the page while you work.</p>'
  + '<ul>'
  + '<li>If you stay quiet for a few minutes, a &ldquo;Still there?&rdquo; box appears. Press &ldquo;I am still here&rdquo; to keep the timer running. If you do not, the timer pauses until you are active again.</li>'
  + '<li>Your progress is saved as you go. If your browser closes or your connection drops, sign in again and carry on.</li>'
  + '<li>Please work in one browser tab. Having Atlas open in two tabs or on two devices at once can cause your time to be flagged for review.</li>'
  + '</ul>'
  + '<h2>Finding information: Search</h2>'
  + '<p>Use the <strong>Search</strong> button at the top of any page, or press Ctrl+K (Cmd+K on a Mac), to look something up without scrolling back through the modules. Small typos are fine.</p>'
  + '<ul>'
  + '<li><strong>Before you finish all modules:</strong> search covers the modules you have already completed, plus the Resources list. If a word only appears in a module you have not finished yet, search tells you which module to finish, without showing what it says.</li>'
  + '<li><strong>After you finish all modules:</strong> search opens up to every module, the Resources list and the FAQ.</li>'
  + '<li>Press a result to open it. Search never shows knowledge-check or final assessment questions, and it is paused while you are taking a check or the final.</li>'
  + '</ul>'
  + '<h2>What unlocks, and when</h2>'
  + '<ul>'
  + '<li><strong>Modules</strong> open one at a time, in order. Finishing one unlocks the next.</li>'
  + '<li><strong>The final assessment</strong> unlocks after the last module. Your questions are drawn from a larger set, and the order of the answers is different for every moderator. You can reopen any past attempt from the Learning Path to see the result or review your answers.</li>'
  + '<li><strong>The FAQ</strong> is open at any time from the Resources tab and has its own search. It is added to the main Search once you have finished every module.</li>'
  + '<li><strong>The Atlas Tracker App</strong> link in Resources stays locked until you pass the final assessment. When you pass, a card on the Learning Path points you to it as your next step.</li>'
  + '</ul>'
  + '<h2>Other things in the app</h2>'
  + '<ul>'
  + '<li><strong>Resources tab:</strong> links to the tools, documents and SharePoint folders you will use. Open it any time you need to find something.</li>'
  + '<li><strong>Mileage tab:</strong> log travel distance for reimbursement.</li>'
  + '<li><strong>Light and dark view:</strong> use the round button at the top right to switch.</li>'
  + '<li><strong>Sign out:</strong> use the button at the top right when you are finished for the day.</li>'
  + '</ul>'
  + '<div class="callout"><div class="c-ic">&#9432;</div><div class="c-tx"><strong>Need help?</strong> If something does not work or a screen is unclear, contact your project coordinator before you continue.</div></div>'
  + '<h2>Ready?</h2>'
  + '<p>Press &ldquo;Mark complete&rdquo; below to finish this module and unlock the next one.</p>';
const ATLAS_MODULES = [
  {id:'welcome', ic:'&#128075;', title:'Welcome to Atlas', sub:'What Atlas is and how this onboarding works.', min:5, gate:'none', cta:'Mark complete', body: WELCOME_BODY},
  {id:'centific', ic:'&#127970;', title:'Who Is Centific', sub:'The company behind the project, and your role in it.', min:12, gate:'check', body:
      '<p>If a participant asks you who Centific is, this is all you need:</p>'
    + '<div class="script">Centific is a global data and AI company. We collect real-world data so that AI systems learn to understand the world as it actually is, not just textbook examples. The scans we capture today become part of the training material that teaches those systems how real homes are laid out.</div>'
    + '<p>Everything below is context so you can answer follow-up questions with confidence. You are not expected to recite it.</p>'
    + '<div class="video-fallback"><div style="font-size:22px">&#9654;</div><div>Centific branding video: coming in a future update, once the Atlas Moderator SharePoint is live.</div></div>'
    + '<h2>1. Who is Centific?</h2>'
    + '<p>Centific is a global data and AI solutions company. We do not build the AI products you would recognise by name. We build the data those products learn from, which is why Centific is sometimes described as the hidden infrastructure behind AI models.</p>'
    + '<p>Our clients are companies that build AI systems. They come to us because a model is only as good as the data it learned from, and good data does not exist by default. Someone has to go out and create it, carefully, with real people who agree to take part. That is our job.</p>'
    + '<p>What we provide to those clients:</p>'
    + '<ul>'
    + '<li><strong>Data creation and collection.</strong> Speech, conversation, video, images, spatial and sensor data, and text are all types of data we collect. These are gathered in structured sessions like the ones you will run.</li>'
    + '<li><strong>Human judgment and evaluation.</strong> Experts review, rate, correct and label AI output so systems learn what a good answer looks like and where they get things wrong.</li>'
    + '<li><strong>Language and cultural coverage.</strong> Data work in 350+ languages and regional variants, so AI works for people outside a handful of major markets.</li>'
    + '<li><strong>Platforms and tooling.</strong> The systems that manage all of the above at scale, including the tools you will use to run and submit sessions.</li>'
    + '</ul>'
    + '<p>The scale behind that: a network of over 1.8 million domain experts, working across 230+ markets and 50+ industries.</p>'
    + '<p>Centific mission line is <em>The Future Learns Here.</em> That is literal. The data collected in your sessions is what the technology learns from.</p>'
    + '<div class="callout"><div class="c-ic">&#9432;</div><div class="c-tx"><strong>One rule that never changes.</strong> We never disclose which client a project is for. Not to participants, not to friends, not on social media. That confidentiality is part of the agreement Centific has with every client, and it is part of your agreement with Centific.</div></div>'
    + '<h2>2. What does the data collection team do?</h2>'
    + '<p>The data collection team is the part of Centific that turns a client requirement into a finished, usable dataset. A client says, in effect, our system cannot reliably understand the inside of a real home. The data collection team designs and runs the work that fixes it.</p>'
    + '<p>End to end, that looks like:</p>'
    + '<ol>'
    + '<li><strong>Define the spec.</strong> What kind of data is needed, from which kinds of properties, in what conditions, and what counts as acceptable quality.</li>'
    + '<li><strong>Recruit and consent participants.</strong> Find people whose homes match the profile, explain what they are agreeing to, and collect proper consent before anything is recorded.</li>'
    + '<li><strong>Schedule and prepare.</strong> Match participants to sessions and moderators, confirm attendance, and make sure the equipment and tooling work before anyone travels.</li>'
    + '<li><strong>Run the sessions.</strong> This is where you come in. Moderators run the actual captures to the project format.</li>'
    + '<li><strong>QA review.</strong> Every capture is checked against the project quality standards. Sessions that miss the bar are flagged, returned or rejected.</li>'
    + '<li><strong>Process and deliver.</strong> Accepted sessions are processed, labelled, packaged into a dataset and delivered to the client to train and evaluate their system.</li>'
    + '</ol>'
    + '<p>Two things worth understanding about how the team works:</p>'
    + '<ul>'
    + '<li><strong>Quality is the product, not volume.</strong> A large pile of unusable scans is worth nothing. The team is measured on how much data passes QA, not on how much was recorded.</li>'
    + '<li><strong>Every stage depends on the one before it.</strong> A rejected session does not just cost one scan; it costs the participant time, the recruiter effort, and it leaves a gap in the dataset that someone has to fill again. On Atlas that means going back to a stranger home for a second visit.</li>'
    + '</ul>'
    + '<p>As an Atlas moderator you will mainly interact with your Project Manager for scheduling, questions and escalations, and indirectly with QA reviewers, whose feedback tells you whether your sessions are hitting the standard.</p>'
    + '<h2>3. Who you work with on Atlas</h2>'
    + '<ul>'
    + '<li><strong>Sander Denecker, Program Manager.</strong> Owns the Atlas program overall.</li>'
    + '<li><strong>Kayla Garcia, Senior Project Manager.</strong> Your day-to-day escalation contact. Reach her in the Atlas Moderators channel in Microsoft Teams.</li>'
    + '<li><strong>David Kang, Technical Program Manager.</strong> Architect of the Atlas Tracker App. Tracker problems route to him through your Project Manager.</li>'
    + '<li><strong>Ingrid Lindstrom, Training and Development.</strong> Owns this onboarding app. If something here is unclear or a link is broken, tell her.</li>'
    + '<li><strong>The project inbox, ben_atlas@centific.com.</strong> Where participant questions about pay, consent and data use go. Give this address to participants rather than improvising an answer.</li>'
    + '</ul>'
    + '<h2>4. What is the moderator role on Atlas?</h2>'
    + '<p>You are the person who runs the session and is responsible for the data being usable. Every other stage of the pipeline is either preparing for your visit or reacting to what you produced. On Atlas you are also the only Centific person in the building, so you carry the host-facing side as well as the technical side.</p>'
    + '<p>What the role involves:</p>'
    + '<ul>'
    + '<li><strong>Prepare.</strong> Check your rig, your devices, your charge and your free storage before you travel, not on the participant doorstep.</li>'
    + '<li><strong>Set people at ease.</strong> Introduce yourself, explain what is going to happen, walk the participant through the rooms and the scenarios, and confirm they understand what they consented to.</li>'
    + '<li><strong>Hold the format.</strong> Keep every walk inside the project specification: the right path, the right pace, the right lighting condition, the right number of walks per floor.</li>'
    + '<li><strong>Do your own QA.</strong> On Atlas there is no second moderator checking behind you. You verify tracking, framing, file integrity and upload yourself, before you leave.</li>'
    + '<li><strong>Handle problems live.</strong> A fan nobody turned off, a cat that walks into frame, a device that drops tracking. You deal with it in the moment, re-record where the standard requires it, and record what happened.</li>'
    + '<li><strong>Submit correctly and flag issues.</strong> Follow the logging and upload steps exactly, and tell your Project Manager about anything that went wrong. An honest flag is far cheaper than a surprise found in QA.</li>'
    + '</ul>'
    + '<p>Just as important, what the role is not:</p>'
    + '<ul>'
    + '<li><strong>You are not an interviewer or researcher.</strong> You are not there to collect opinions or ask the household about their life. The spatial capture is the deliverable.</li>'
    + '<li><strong>You are not the final QA reviewer.</strong> You apply first-line quality judgment and you re-record what clearly fails, but you do not decide whether a session is finally accepted. Flag it and let QA decide.</li>'
    + '<li><strong>You are not the client representative.</strong> You represent Centific. You cannot speak for the client, and you cannot name them.</li>'
    + '<li><strong>You are not expected to improvise policy.</strong> If a participant asks something you were not briefed on, it is completely acceptable to route them to ben_atlas@centific.com.</li>'
    + '</ul>'
    + '<div class="callout"><div class="c-ic">&#9733;</div><div class="c-tx"><strong>The core of the job.</strong> Be warm enough that a stranger is comfortable having you walk through their home, while quietly holding the capture to a technical spec. These are two sides of the same coin, and getting the balance right is the whole skill.</div></div>'
    + '<p>You are also, for most participants, the only person from Centific they will ever meet. To them, you are the company. How you handle the visit shapes whether they trust the process and whether they tell other people this was a good experience.</p>'
    + '<h2>5. Why we collect this data</h2>'
    + '<p>AI systems learn from examples. If the examples are narrow, the system is narrow. A spatial model trained mostly on showroom apartments and tidy, evenly lit rooms will do fine in a lab and then fail the moment it meets a real home: a hallway that turns twice, a room where the only light is a window at midday, furniture pushed against a wall, a staircase with no handrail on one side.</p>'
    + '<p>Real interiors are genuinely hard to obtain. They cannot be scraped, and a rendered scene gets the lighting, the clutter and the geometry subtly wrong. They have to be captured, with consent, in real homes, by people who agree to take part. That is why these sessions exist, and it is why the precision of your walks matters.</p>'
    + '<h2>6. Saying it to a participant</h2>'
    + '<p>Keep it short, plain and honest. Something like:</p>'
    + '<div class="script">I work with Centific. We collect data that is used to train AI systems. Today we are capturing a 3D scan of the inside of your home, so that this kind of technology can understand how real homes are actually laid out.</div>'
    + '<div class="script">The scans get checked for quality and then go into a dataset used to train that technology. You agreed to that in the consent documentation you signed, and you can stop or ask me anything at any point.</div>'
    + '<h2>7. What not to say</h2>'
    + '<ul>'
    + '<li><strong>Never name the client.</strong> If asked which company the data is for, say plainly: I am not able to share the client name, that is part of our agreement with them. What I can tell you is what the data is used for. That is a complete, professional answer. Do not hint, do not guess, and do not confirm a participant guess.</li>'
    + '<li><strong>Do not speculate.</strong> If you do not know how the data will be used beyond what you have been told, say so and route it to ben_atlas@centific.com.</li>'
    + '<li><strong>Do not make promises</strong> about payment amounts, timelines, retention periods or future work that are not in the project documentation you were given.</li>'
    + '<li><strong>Do not oversell.</strong> Saying the data helps AI understand real homes is true. Saying their house will appear in a famous product is not something you can promise.</li>'
    + '</ul>'
    + '<h2>8. Questions participants actually ask</h2>'
    + '<ul>'
    + '<li><strong>Who is this for?</strong> Centific collects data on behalf of companies that build AI systems. You cannot name the client, and you can say that openly.</li>'
    + '<li><strong>Will I be in the recording?</strong> No. Atlas captures rooms, not people. Nobody is recorded, which is exactly why you ask the household to stay off the floor being scanned.</li>'
    + '<li><strong>Will my home be identifiable?</strong> Be straightforward about what is in frame: the interior of every floor, including their belongings and decor. How that data is handled, stored and who can see it is set out in the consent documentation they signed, and ben_atlas@centific.com answers anything the documentation does not. Do not speculate about blurring or de-identification.</li>'
    + '<li><strong>What happens to the scan?</strong> It is checked for quality, processed and used as AI training data under the terms they agreed to. Handling and storage follow the project data protection rules.</li>'
    + '<li><strong>Am I doing it right?</strong> On Atlas the participant mostly stays out of the way, so the reassuring answer is that there is nothing they can get wrong. Their job is to keep the floor clear and let you work.</li>'
    + '</ul>'
    + '<h2>9. Why this matters for you</h2>'
    + '<p>Participants relax when the person in their home sounds like they know what they are doing and why. A moderator who can explain the purpose in two clear sentences gets a calmer visit, a more cooperative household and a cleaner capture. Confidence about the why is a quality tool, not just a courtesy.</p>'
  },
  {id:'fundamentals', ic:'&#129517;', title:'Moderator Fundamentals', sub:'The script cards at the core of the moderator role.', min:25, gate:'check', body:
      '<h2>How to use this module</h2>'
    + '<p>Everything below is a script card. Each card gives you the situation, a sample exchange, what good looks like (Coach for) and what going wrong looks like (Fail signals). You will run these as role-plays at in-person training, with one person playing the moderator and one playing the participant.</p>'
    + '<ul>'
    + '<li><strong>Scripts are scaffolding, not lines to memorise.</strong> What is being assessed is the posture, not word-for-word recall.</li>'
    + '<li><strong>Compliance is the spine of every card.</strong> Never name the client. Never quote bonus figures on site. Never handle money. Tie compensation, timeline and data use back to the signed consent documentation, and route open questions to ben_atlas@centific.com.</li>'
    + '<li><strong>Learn the journey cards first.</strong> If you cannot run a clean, warm greeting, you are not ready for the de-escalation and safety cards.</li>'
    + '</ul>'
    + '<div class="callout warn"><div class="c-ic">&#9888;</div><div class="c-tx"><strong>Pending confirmation.</strong> The exact wording of Atlas payment and withdrawal terms is being confirmed by the Atlas leads. Until this module is updated, read the payment language in the booking scripts exactly as written and route every other pay question to ben_atlas@centific.com rather than paraphrasing it.</div></div>'
    + '<h2>Set A: the participant journey</h2>'
    + '<p>Greeting, expectations, orientation and payment framing. The core arc of a visit done right.</p>'
    + '<h3>A1. Welcoming a nervous or hesitant participant</h3>'
    + '<p><strong>Setup.</strong> You arrive and the participant is visibly anxious about having a stranger walk through their home with five cameras.</p>'
    + '<div class="script">PT: Hi, I am a little nervous, I have never done anything like this.</div>'
    + '<div class="script">MOD: You are in exactly the right place, welcome. I am [name], I will be here the whole time and I will walk you through everything before we start. There are no wrong answers here and nothing you can mess up. We will go at your pace.</div>'
    + '<div class="script">PT: What if I get in the way of the cameras?</div>'
    + '<div class="script">MOD: You will not, because the cameras never record people. I will show you each floor before I scan it, and while I am recording you just wait in another part of the house. By the time we start it will feel familiar.</div>'
    + '<p><strong>Coach for.</strong> Warmth in the first ten seconds. States you will be there the whole visit. Frames the walkthrough before the scan. Keeps purpose framing simple and never names the client.</p>'
    + '<p><strong>Fail signals.</strong> Starting setup with no reassurance. Pressuring a hesitant participant to just get on with it. Naming or hinting at the client. Promising a survey or asking for a review.</p>'
    + '<h3>A2. Explaining the session to an unprepared participant</h3>'
    + '<p><strong>Setup.</strong> The participant admits they did not read the materials or their consent documentation in advance.</p>'
    + '<div class="script">PT: I will be honest, I did not really read what they sent.</div>'
    + '<div class="script">MOD: No problem at all, here is the short version. I am going to walk through each floor of your home with a rig of phones that records a 3D scan of the rooms, to help train an AI system. Two walks per floor, one with the curtains open and one with them closed. No people are recorded at any point. I will show you each floor before I record it.</div>'
    + '<div class="script">PT: Do I need to do anything for it?</div>'
    + '<div class="script">MOD: Two things. Your consent documentation needs to be signed, and the floor I am scanning needs to be clear of people and pets while I record. Let me check the paperwork is in place, and then I will walk you round so nothing is a surprise.</div>'
    + '<p><strong>Coach for.</strong> Clear, jargon-free overview. Checks consent is signed before recording anything. Offers to preview the floors. Routes anything about data or payment to the compliant script.</p>'
    + '<p><strong>Fail signals.</strong> Making the participant feel judged. Starting to record before confirming signed consent. Improvising data-use or payment terms.</p>'
    + '<h3>A3. Payment questions before the session</h3>'
    + '<p><strong>Setup.</strong> Before you start, the participant asks how and when they will be paid, and about possible bonuses.</p>'
    + '<div class="script">PT: Before we start, how does getting paid work?</div>'
    + '<div class="script">MOD: All of that is set out in your participant documentation, the rate and the method. If anything is unclear, ben_atlas@centific.com can pull it up for you.</div>'
    + '<div class="script">PT: Is there a bonus I can get?</div>'
    + '<div class="script">MOD: Any bonus terms would also be in your documentation. I do not have separate figures to quote on site. Email ben_atlas@centific.com if you want it confirmed.</div>'
    + '<p><strong>Coach for.</strong> Points to the participant documentation as the source of truth for pay rather than quoting a figure from memory. Refuses to improvise bonus figures and routes to support. Mentions the participant can stop or withdraw consent at any time.</p>'
    + '<p><strong>Fail signals.</strong> Quoting a bonus or referral figure on site. Inventing forfeiture or withdrawal terms. Implying pay depends on someone else finishing.</p>'
    + '<h3>A4. Payment questions after the session</h3>'
    + '<p><strong>Setup.</strong> The visit is complete and the participant asks when the money will arrive and what to do if it is late.</p>'
    + '<div class="script">MOD: That timing is set out in your participant documentation. If it does not show up on schedule, email ben_atlas@centific.com and they will handle it directly.</div>'
    + '<div class="script">MOD: And just to make sure it reaches the right inbox: ben_atlas@centific.com. [Read it back slowly.]</div>'
    + '<p><strong>Coach for.</strong> Points to the documentation as the source of truth. Reads the routing email back to confirm spelling. Routes delays to the project inbox rather than guessing.</p>'
    + '<p><strong>Fail signals.</strong> Promising an exact deposit date. Handling or offering money directly. Reconstructing withdrawal or forfeiture terms from memory.</p>'
    + '<h3>A5. Language barrier or accessibility need</h3>'
    + '<p><strong>Setup.</strong> The participant has limited English, a hearing impairment or another disability that changes how instructions must be given.</p>'
    + '<div class="script">PT: Sorry, my English is not so good. Sometimes I do not catch everything fast.</div>'
    + '<div class="script">MOD: That is completely fine. We will take it slowly and I will show you each step rather than just explain it. Watch me first, then we try together. Stop me any time and I will repeat.</div>'
    + '<div class="script">MOD: I will walk you through every floor before I record it, and use simple words and gestures. There is no rush and no wrong pace here.</div>'
    + '<p><strong>Coach for.</strong> Slows down, demonstrates visually and checks understanding after each step. Confirms informed consent is real before proceeding. Escalates to Kayla Garcia if a needed accommodation cannot be met.</p>'
    + '<p><strong>Fail signals.</strong> Speaking faster or louder instead of adapting. Assuming understanding without confirming it. Improvising or waiving consent requirements to make it work.</p>'
    + '<h2>Set B: de-escalation under pressure</h2>'
    + '<h3>B1. Questions about the client or data use</h3>'
    + '<p><strong>Setup.</strong> The participant asks who the client is and how the scan of their home will actually be used.</p>'
    + '<div class="script">PT: So who is actually behind this? And what happens to the scan of my house?</div>'
    + '<div class="script">MOD: Fair question. I am not able to name the specific company. What I can say is that the data helps train an AI system that needs to understand how real indoor spaces are laid out.</div>'
    + '<div class="script">MOD: The full detail lives in the consent documentation you signed. That is the source of truth, so I will not paraphrase it and risk getting it slightly wrong. For anything beyond it, ben_atlas@centific.com can help.</div>'
    + '<p><strong>Coach for.</strong> Never names the client. Points to the signed consent documentation as the source of truth. Routes extra detail to the project inbox.</p>'
    + '<p><strong>Fail signals.</strong> Naming or guessing at the client. Improvising how data will be used. Getting flustered instead of routing cleanly.</p>'
    + '<h3>B2. Frustrated participant: wait or technical issue</h3>'
    + '<p><strong>Setup.</strong> The participant is irritated after a long wait, or a device problem interrupts the visit.</p>'
    + '<div class="script">PT: I have been waiting around in my own house for ages, and now the equipment is not working?</div>'
    + '<div class="script">MOD: I am sorry you have been waiting. That is on us, not you, and I appreciate your patience. This is a quick fix, nothing you did.</div>'
    + '<p><strong>Coach for.</strong> Owns the experience plainly. Reassures using the framing that compensation is for time spent participating. Stays calm and resets.</p>'
    + '<p><strong>Fail signals.</strong> Blaming the equipment defensively. Offering cash or a bonus to smooth it over. Pushing ahead when quality is clearly compromised.</p>'
    + '<h3>B3. Participant wants to stop mid-session</h3>'
    + '<p><strong>Setup.</strong> Partway through, the participant says they want to stop, and may ask about their data.</p>'
    + '<div class="script">PT: I think I want to stop. I am not feeling it.</div>'
    + '<div class="script">MOD: Absolutely, you can stop at any time and that is completely okay.</div>'
    + '<div class="script">PT: And what about the recordings of my house?</div>'
    + '<div class="script">MOD: You can withdraw consent at any point. Tell me what you would like and I will connect you with ben_atlas@centific.com for the details, because the exact terms are set out in your documentation and I do not want to paraphrase them.</div>'
    + '<p><strong>Coach for.</strong> Respects the choice immediately, with no pressure. Routes pay and withdrawal terms to the documentation and the project inbox rather than reciting them. Notifies Kayla Garcia.</p>'
    + '<p><strong>Fail signals.</strong> Trying to talk the participant into staying. Improvising forfeiture or withdrawal terms in either direction. Continuing to record after a participant has asked to stop.</p>'
    + '<h3>B4. Participant unavailable or the visit starts late</h3>'
    + '<p><strong>Setup.</strong> You arrive at the scheduled time and the participant is not ready, or asks to push the start back substantially.</p>'
    + '<div class="script">PT: Sorry, I am not ready, can you give me an hour?</div>'
    + '<div class="script">MOD: Please do not worry, things happen. Let me check what that does to the time we need.</div>'
    + '<div class="script">MOD: With the time left today we would not be able to complete every floor properly, and I would rather not rush it. Let us rebook so you get the full session. You will not lose your spot.</div>'
    + '<p><strong>Coach for.</strong> Warm, non-judgmental response. Honestly assesses whether a complete, quality capture still fits in the time available. Reschedules firmly rather than rushing a compromised session.</p>'
    + '<p><strong>Fail signals.</strong> Scolding the participant. Rushing a compromised capture through. Promising partial pay for a session that cannot run.</p>'
    + '<h3>B5. Participant negotiates scope</h3>'
    + '<p><strong>Setup.</strong> The participant tries to trim the visit. Can you skip this room, can you skip the second walk, can we cut this short.</p>'
    + '<div class="script">PT: Can you just skip this one? Do you really need every room?</div>'
    + '<div class="script">MOD: I hear you, and I will keep us moving. Every room on a floor is part of what makes the scan usable, so I cannot drop them, but I can pace us efficiently and take a short break whenever you need.</div>'
    + '<div class="script">PT: So it is all or nothing?</div>'
    + '<div class="script">MOD: The session is designed as a set, including both lighting walks on each floor. If something feels uncomfortable rather than just long, tell me. We can pause or stop entirely, and I will always respect that.</div>'
    + '<p><strong>Coach for.</strong> Explains why full scope matters, kindly. Offers flexibility on pace, breaks and comfort, never on required content. Distinguishes this is long from this is uncomfortable.</p>'
    + '<p><strong>Fail signals.</strong> Agreeing to skip rooms, floors or the second lighting walk to finish early. Improvising partial-pay terms. Pressuring the participant to continue.</p>'
    + '<h3>B6. Participant wants to see the capture</h3>'
    + '<p><strong>Setup.</strong> The participant asks to see what the phones just recorded.</p>'
    + '<div class="script">PT: Can you show me what you just recorded? I just want to see how it looks.</div>'
    + '<div class="script">MOD: Totally understand wanting to see, most people do. We got the capture we need, so let us go ahead and move to the next floor rather than reviewing it here.</div>'
    + '<div class="script">PT: Is that a privacy thing?</div>'
    + '<div class="script">MOD: It is about keeping the session moving efficiently and keeping the process consistent for everyone. How the data is stored and used is spelled out in the documentation you signed, and ben_atlas@centific.com can answer anything beyond that.</div>'
    + '<p><strong>Coach for.</strong> Validates the curiosity before holding the line. Frames it as a pace and consistency matter, never a flat refusal. Atlas follows the same approach as prior collections: not no, just let us keep moving.</p>'
    + '<p><strong>Fail signals.</strong> Playing footage back on site. Improvising what happens to the data. Making the participant feel accused or distrusted for asking.</p>'
    + '<h2>Set C: boundaries and safety</h2>'
    + '<h3>C1. Requests: childcare, pets or transportation</h3>'
    + '<p><strong>Setup.</strong> The participant asks for help with money, transport, or watching a child or pet while you scan.</p>'
    + '<div class="script">PT: Any chance you could keep an eye on my kid for a sec, or hold the dog?</div>'
    + '<div class="script">MOD: I really wish I could help directly. I am not able to handle payments or reimbursements on site, and I cannot supervise children or pets during the session. I need to give the capture my full attention, and the floor I am scanning has to stay clear anyway.</div>'
    + '<p><strong>Coach for.</strong> Kind refusal that offers the correct channel. Never hands out cash. For a session involving a minor, the signing guardian stays present throughout.</p>'
    + '<p><strong>Fail signals.</strong> Offering or fronting money just this once. Agreeing to watch a child or pet during the session. Leaving the request unrouted.</p>'
    + '<h3>C2. Assessing the home on arrival</h3>'
    + '<p><strong>Setup.</strong> On arrival the environment or the participant may not be workable. Every Atlas session happens at a participant private residence, so this assessment is yours to make on arrival, every time.</p>'
    + '<div class="script">MOD: Before we set up, let me take a quick look around so we can capture safely and clearly. I need clear walking paths through each floor and enough room to move with the rig.</div>'
    + '<div class="script">PT: It is a bit messy, is that a problem?</div>'
    + '<div class="script">MOD: For a safe, quality session I do need clear, walkable paths through the rooms. As things are right now I cannot proceed today, so let us look at rescheduling. I appreciate your understanding.</div>'
    + '<p><strong>Coach for.</strong> Assesses workability within the first fifteen to twenty minutes. Asserts the clear, walkable and sober requirement. Cancels rather than sinking time into a doomed session. For a minor, the signing guardian is present, ID-checked and stays throughout.</p>'
    + '<p><strong>Fail signals.</strong> Pushing ahead in an unsafe or unsuitable home. Continuing a session involving a minor with an absent guardian. Failing to escalate.</p>'
    + '<h3>C3. Participant under the influence</h3>'
    + '<p><strong>Setup.</strong> The participant appears intoxicated or otherwise not sober.</p>'
    + '<div class="script">MOD: We are not able to run the session today. I am going to head out now.</div>'
    + '<div class="script">PT: Wait, why? Can we reschedule? What about my payment?</div>'
    + '<div class="script">MOD: I am not able to get into that. Take care. [Leave. No reasons, no reschedule offer, no discussion of payment.]</div>'
    + '<p><strong>Coach for.</strong> Ends the session outright: no reschedule, no compensation discussion, no negotiation. Stays calm and neutral, gives no reason and does not debate the decision. Does not diagnose, accuse or use words like drunk or high. Escalates to Kayla Garcia and documents immediately after, from a safe location.</p>'
    + '<p><strong>Fail signals.</strong> Offering to reschedule or implying the participant can come back. Discussing or apologising about compensation. Getting drawn into a back and forth. Confronting or accusing the participant about their state.</p>'
    + '<h3>C4. Moderator safety in a private residence</h3>'
    + '<p><strong>Setup.</strong> You are inside a participant home, alone, and the situation does not feel safe or workable.</p>'
    + '<div class="script">MOD: Thanks for having me. I will start in the open areas, and I will let you know before I move to each floor.</div>'
    + '<div class="script">PT: We could just start in the back room if you want, I will come with you.</div>'
    + '<div class="script">MOD: I will work through the floors in order, and I will need the floor clear while I record. You know, I do not think today setup will give us a clean result, so I am going to reschedule rather than push ahead. I will be in touch through the usual channel. Thanks so much.</div>'
    + '<p><strong>Coach for.</strong> Keeps a clear, unobstructed path to the exit. Exits gracefully without over-justifying. Notifies Kayla Garcia. Safety before session completion, always.</p>'
    + '<p><strong>Fail signals.</strong> Being led into an isolated or closed space. Ignoring a gut sense that it is unsafe. Feeling obliged to finish despite discomfort. Leaving without notifying anyone.</p>'
    + '<h3>C5. Participant inappropriate toward the moderator</h3>'
    + '<p><strong>Setup.</strong> The participant makes personal, flirtatious or otherwise inappropriate comments or advances during the visit.</p>'
    + '<div class="script">PT: You are really pretty, you know that? We should get a drink after this.</div>'
    + '<div class="script">MOD: I am here in a professional capacity, so let us keep our focus on the session. Back to the next floor, I will let you know when I start recording.</div>'
    + '<div class="script">PT: Come on, do not be like that.</div>'
    + '<div class="script">MOD: I need us to keep this professional. If that is not workable, I will end the session here. [If it continues:] We are going to stop for today. [Calmly end the session, leave, then notify Kayla Garcia and document from a safe location.]</div>'
    + '<p><strong>Coach for.</strong> Redirects once, firmly and calmly. Names the professional boundary without shaming or debating. Has a clear end-and-leave line if it continues. Notifies Kayla Garcia and documents afterwards, from safety.</p>'
    + '<p><strong>Fail signals.</strong> Laughing it off or engaging with the personal comments. Over-explaining or arguing the boundary. Staying in an escalating situation out of politeness.</p>'
    + '<h2>Documentation and escalation discipline</h2>'
    + '<ul>'
    + '<li><strong>Document from safety, not from the doorstep.</strong> Leave first, then write it up. Nothing you need to record is worth staying in the house for.</li>'
    + '<li><strong>Within 24 hours.</strong> Any safety-related incident gets a written report within 24 hours: date and time, location, who was present, what happened, what you did, who you escalated to and the outcome.</li>'
    + '<li><strong>Escalate to Kayla Garcia</strong> in the Atlas Moderators Teams channel. For anything criminal or immediately dangerous, call 911 first and notify afterwards.</li>'
    + '<li><strong>Flag quality problems honestly.</strong> A session you flag can be fixed. A session you quietly hope passes QA costs a second visit to a stranger home.</li>'
    + '</ul>'
    + '<div class="callout"><div class="c-ic">&#9432;</div><div class="c-tx"><strong>When in doubt, route it.</strong> You are never expected to invent an answer about pay, consent, data use or the client. Not knowing and routing cleanly to ben_atlas@centific.com is the correct, professional answer.</div></div>'
  },
  {id:'equipment', ic:'&#128247;', title:'Equipment and Rig Setup', sub:'The five-phone rig and your pre-travel checks.', min:10, gate:'none', cta:'Mark complete', body:
      '<div class="awaiting"><div class="a-ic">&#9998;</div><div class="a-tx"><strong>[PLACEHOLDER] Equipment and rig setup content in preparation.</strong> This module will be published before in-person training, where you will also handle the rig yourself.</div></div>'
    + '<h2>What this module will cover</h2>'
    + '<ul>'
    + '<li>[PLACEHOLDER] Assembling and balancing the five-phone bracket.</li>'
    + '<li>[PLACEHOLDER] Device preparation: app versions, settings, airplane and notification handling.</li>'
    + '<li>[PLACEHOLDER] Charge and power bank planning for a full day of homes.</li>'
    + '<li>[PLACEHOLDER] Pre-travel checklist, including the 8 GB free storage check on every device.</li>'
    + '<li>[PLACEHOLDER] Care, transport and what to do if a device is damaged or lost.</li>'
    + '</ul>'
    + '<p>The capture standards that depend on this equipment are already covered in Project Workflow and Guidelines.</p>'
  },
  {id:'workflow', ic:'&#128260;', title:'Project Workflow and Guidelines', sub:'How a home visit runs, start to finish.', min:20, gate:'check', body:
      '<h2>The shape of an Atlas visit</h2>'
    + '<p>You will get hands-on practice on all of this at in-person training in Redmond. This module gives you the sequence and the standards so you arrive with it already in your head.</p>'
    + '<ol>'
    + '<li>Receive and review your assignment in the Atlas Tracker.</li>'
    + '<li>Confirm the booking with the participant in advance, by text, then call, then voicemail.</li>'
    + '<li>Prepare your rig: charge, free storage, device check.</li>'
    + '<li>Travel to the home. Park in a well-lit spot that does not block an exit.</li>'
    + '<li>Arrival: introduce yourself, confirm identity and consent, assess the home.</li>'
    + '<li>Walk the participant through the floors and the scenarios before any recording.</li>'
    + '<li>Prepare each floor, then record both lighting walks on that floor.</li>'
    + '<li>Verify the data on site: tracking held, both walks present, files intact.</li>'
    + '<li>Enter the session metadata and log the session.</li>'
    + '<li>Upload and confirm the upload before you close out the visit.</li>'
    + '</ol>'
    + '<h2>Equipment</h2>'
    + '<ul>'
    + '<li>A multi-phone rig, a bracket holding <strong>five smartphones</strong> at once, a mix of Android and iOS devices.</li>'
    + '<li>Power banks or charging cables, so the rig lasts the whole visit.</li>'
    + '<li>All five devices record <strong>concurrently</strong> during every walk. That is what gives the multi-angle spatial coverage, so a walk recorded on four devices is not a complete walk.</li>'
    + '</ul>'
    + '<h2>Storage and data volume</h2>'
    + '<p>These estimates are per recording device, per session. Verify free storage on <strong>every</strong> device before every collection session begins, not on the doorstep.</p>'
    + '<ul>'
    + '<li><strong>Android:</strong> roughly 150 MB per minute.</li>'
    + '<li><strong>iOS:</strong> roughly 400 MB per minute.</li>'
    + '<li><strong>Minimum free storage:</strong> 8 GB per device.</li>'
    + '<li><strong>Frames per floor scan:</strong> 1,000 to 3,000 or more.</li>'
    + '</ul>'
    + '<div class="callout warn"><div class="c-ic">&#9888;</div><div class="c-tx"><strong>An iPhone fills four times faster than an Android.</strong> If one device runs out of space mid-walk you lose that walk on that device, and the walk has to be re-recorded. 8 GB free per device is the floor, not the target.</div></div>'
    + '<h2>Two walks per floor</h2>'
    + '<p>Every floor of the home requires <strong>two separate scan walks</strong> under different lighting conditions.</p>'
    + '<ul>'
    + '<li><strong>Walk 1:</strong> curtains and blinds <strong>open</strong>. Natural daylight only, indoor lights <strong>off</strong>.</li>'
    + '<li><strong>Walk 2:</strong> curtains and blinds <strong>closed</strong>. Indoor lights <strong>on</strong>.</li>'
    + '</ul>'
    + '<p>Two exceptions and conditions worth knowing:</p>'
    + '<ul>'
    + '<li>If a home has <strong>no curtains or blinds at all</strong>, one daytime walk per floor is sufficient for that home.</li>'
    + '<li>Curtain position and lighting conditions must <strong>not change mid-walk</strong> under any circumstances. If someone opens a blind or flips a light switch while you are recording, that walk is void and you re-record it.</li>'
    + '</ul>'
    + '<h2>The home must be completely static</h2>'
    + '<p>Once scanning begins, nothing in the home moves except you.</p>'
    + '<ul>'
    + '<li>No movement of furniture, doors, objects or decor at any point during the recordings.</li>'
    + '<li><strong>People, pets and children must be kept entirely off the floor being scanned.</strong> Not in a corner, not in a doorway. Off the floor.</li>'
    + '<li><strong>Ceiling fans and standing fans must be turned off</strong> during all recording sessions.</li>'
    + '<li>Doors and windows stay in their original position once scanning begins and cannot be adjusted until the walk is complete.</li>'
    + '</ul>'
    + '<div class="callout danger"><div class="c-ic">&#9888;</div><div class="c-tx"><strong>This is also how Atlas protects participants.</strong> Atlas never captures people. Keeping the household off the floor is both a data requirement and the privacy guarantee you made to them at the door.</div></div>'
    + '<h2>Scanning technique</h2>'
    + '<ul>'
    + '<li>Walk at a <strong>slow, steady pace, roughly one step per second</strong>, through the centre of rooms and hallways.</li>'
    + '<li>Keep the camera in <strong>continuous translational motion</strong> at all times. Standing still and rotating in place is not permitted, because the tracking needs the movement.</li>'
    + '<li>Keep the <strong>maximum practical distance from walls and furniture</strong>, to capture wide-angle room views and maximise spatial coverage.</li>'
    + '<li>Each recording covers an <strong>entire floor in a single continuous walk</strong>, following a loop path. No stopping and restarting partway through.</li>'
    + '<li><strong>Avoid pointing the camera directly at bright light sources</strong> such as windows, skylights or lamps. It degrades tracking.</li>'
    + '<li>Prioritise <strong>feature-rich areas</strong> in your framing: textured surfaces, furniture, patterns and decor. Blank walls give the tracker nothing to hold onto.</li>'
    + '</ul>'
    + '<h2>Quality standards</h2>'
    + '<p>All scans must meet these criteria before a home visit counts as complete:</p>'
    + '<ul>'
    + '<li>Scans must maintain <strong>active tracking status throughout the entire recording</strong>. Loss of tracking at any point is grounds for a re-record.</li>'
    + '<li>A scan that <strong>loses tracking or ends prematurely must be re-recorded from the start of that floor walk</strong>. Partial uploads are not acceptable. You do not resume from where it dropped.</li>'
    + '<li>All scan data must be <strong>verified as successfully uploaded</strong> to the designated cloud storage before the visit is closed out.</li>'
    + '</ul>'
    + '<h2>You are your own QA</h2>'
    + '<p>On Atlas you work solo and you are both the primary moderator and the QA moderator. There is nobody behind you to catch a dropped track or a missing second walk. Before you leave a home, you personally confirm:</p>'
    + '<ul>'
    + '<li>Every floor has both lighting walks, or the documented single walk if the home has no window coverings.</li>'
    + '<li>Every walk recorded on all five devices.</li>'
    + '<li>Tracking held for the full length of every recording.</li>'
    + '<li>No person, pet or moving fan appears in any walk.</li>'
    + '<li>Metadata and the session log are complete and correct.</li>'
    + '<li>The upload completed and was confirmed, not just started.</li>'
    + '</ul>'
    + '<h2>Deliverables per home visit</h2>'
    + '<ol>'
    + '<li><strong>Complete floor scans.</strong> Completed scans for every floor of the assigned home, two walk recordings per floor.</li>'
    + '<li><strong>Verified data upload.</strong> Confirmed, successfully uploaded scan data for the whole visit, transferred to the designated cloud storage before close-out.</li>'
    + '<li><strong>Session log.</strong> A log record for every scan taken in the home, capturing the home identifier, the floor number, the lighting condition used, and the upload confirmation status.</li>'
    + '</ol>'
    + '<div class="callout"><div class="c-ic">&#9432;</div><div class="c-tx"><strong>[PLACEHOLDER] Still to be confirmed by the Atlas leads.</strong> How homes are assigned, the upload destination and the connectivity fallback when a home network cannot carry the upload. This module will be updated when those are confirmed.</div></div>'
  },
  {id:'tracker', ic:'&#128202;', title:'Atlas Tracker', sub:'Using the Atlas Tracker App.', min:10, gate:'none', cta:'Mark complete', body:
      '<div class="awaiting"><div class="a-ic">&#9998;</div><div class="a-tx"><strong>[PLACEHOLDER] Atlas Tracker content in preparation.</strong> The Atlas Tracker App is being built by David Kang, Technical Program Manager. The full module, with screenshots and a knowledge check, will be published here before in-person training.</div></div>'
    + '<h2>What the Atlas Tracker is for</h2>'
    + '<p>The Atlas Tracker App is the system of record for Atlas sessions. Participants are booked through it, your assignments arrive through it, and your session metadata and logs go into it.</p>'
    + '<h2>What this module will cover</h2>'
    + '<ul>'
    + '<li>[PLACEHOLDER] How assignments reach you and how to review one.</li>'
    + '<li>[PLACEHOLDER] The booking view and what you confirm against it.</li>'
    + '<li>[PLACEHOLDER] The fields you complete for every session, including the per-scan log: home identifier, floor number, lighting condition and upload confirmation status.</li>'
    + '<li>[PLACEHOLDER] What a complete session looks like in the Tracker, and how to flag a problem.</li>'
    + '</ul>'
    + '<div class="callout"><div class="c-ic">&#9432;</div><div class="c-tx"><strong>Until this module is live,</strong> your Project Manager will walk you through the Tracker at in-person training. Tracker problems in the field route to your Project Manager, who takes them to David Kang.</div></div>'
  },
  {id:'comms', ic:'&#128172;', title:'Participant Communication', sub:'Confirming the booking, and what to say at the door.', min:15, gate:'check', body:
      '<h2>Confirming the booking</h2>'
    + '<p>Participants are booked through the Atlas Tracker App, but confirming the booking is <strong>your</strong> job, and it does not happen on the doorstep. It starts <strong>at least 24 hours before the session</strong>. On Atlas you are the primary moderator for every session you are assigned.</p>'
    + '<div class="callout"><div class="c-ic">&#9432;</div><div class="c-tx"><strong>Fill in every bracketed placeholder before you send or read anything.</strong> A script with [PT Name] still in it is not ready to use. These scripts can change with project requirements, and your Project Coordinator will tell moderators when they do.</div></div>'
    + '<h2>The contact cadence</h2>'
    + '<ol>'
    + '<li><strong>Text first</strong>, no earlier than 24 hours before the session.</li>'
    + '<li><strong>No reply within 3 hours: call.</strong> Never call before you have texted.</li>'
    + '<li><strong>No pickup: leave the voicemail below</strong> rather than calling again immediately.</li>'
    + '</ol>'
    + '<div class="callout warn"><div class="c-ic">&#9888;</div><div class="c-tx"><strong>Always use your synthetic phone number.</strong> Never give a participant your personal number, in a text, on a call or in a voicemail. Registering your synthetic number is one of your final onboarding tasks.</div></div>'
    + '<h2>Confirming a booking: text</h2>'
    + '<div class="script">Hi [PT Name],<br><br>'
    + 'I am [Moderator Name], your moderator for Atlas.<br><br>'
    + 'Here is a quick recap:<br>'
    + 'Date: [Session Date]<br>'
    + 'Time: [Session Time]<br>'
    + 'Location: your home at [full address: number, street name, city, zip code]<br><br>'
    + 'Please have ready: a valid, unexpired government ID. A physical passport, driver licence, state-issued ID card, permanent resident card, military ID or national ID card all work.<br><br>'
    + 'A couple of quick reminders:<br>'
    + 'Please be ready 10 minutes before the scheduled start.<br>'
    + 'If we cannot start within 5 minutes of the scheduled time, we will need to cancel and reschedule your session for another day and time.<br>'
    + 'The floor I am scanning needs to be clear of people and pets while I record, so please plan where everyone will wait.<br><br>'
    + 'This information is included in your Confirmation email as well.<br><br>'
    + 'Please confirm your booking by replying YES to this text.<br>'
    + 'Please also provide your preferred payment email.<br><br>'
    + 'Please note: Payment is contingent on full participation and use of your data. Once the session begins, withdrawing consent or requesting your data not be used, for any reason, will forfeit your payment.</div>'
    + '<p><strong>Coach for.</strong> Every bracketed field filled in correctly before sending. The exact address, unedited. Sending this first, before any call.</p>'
    + '<p><strong>Fail signals.</strong> Calling before texting. Paraphrasing the payment and withdrawal language instead of sending it verbatim. Leaving a placeholder unfilled.</p>'
    + '<h2>Confirming a booking: phone call</h2>'
    + '<p>No reply to the text within 3 hours. You call next.</p>'
    + '<div class="script">Hi [PT Name], this is [Your Name] calling from Centific. I am reaching out regarding your upcoming session for Atlas. Is now a good time to talk?</div>'
    + '<div class="script">I will be the moderator for the session and wanted to check whether you have had a chance to review the materials shared in the Confirmation Email from Centific. This includes what we will be capturing, the schedule, and the consent documentation. I would be happy to answer any questions you may have.</div>'
    + '<div class="script">I also wanted to share some important reminders. The session is scheduled for [Session Date and Time]. Please be ready 10 minutes before your scheduled start so we can register your details in our data capture system. I will be scanning each floor of the home, and the floor I am recording needs to be clear of people and pets while I work. Do you have any questions about the session? Please note: Payment is contingent on full participation and use of your data. Once the session begins, withdrawing consent or requesting your data not be used, for any reason, will forfeit your payment.</div>'
    + '<div class="script">Great, thank you for your time. We will see you soon.</div>'
    + '<p><strong>Coach for.</strong> Confirms it is a good time before launching into the reminders. Leaves real room for participant questions after each block, not just at the end. Reads the payment and withdrawal language exactly as written.</p>'
    + '<p><strong>Fail signals.</strong> Rushing through all three blocks without pausing for a response. Skipping the payment and withdrawal disclosure. Improvising the address or session details from memory instead of what is on the booking.</p>'
    + '<h2>Confirming a booking: voicemail</h2>'
    + '<p>The participant does not pick up. Leave this rather than trying again immediately.</p>'
    + '<div class="script">Hi [PT Name], this is [Your Name] calling from Centific. I am reaching out regarding your upcoming session for Atlas. I will be the moderator for the session and wanted to introduce myself and answer any questions that you may have, including what we will be capturing. Essential information is also contained in the Confirmation Letter, which I am happy to go over with you.<br><br>'
    + 'One last item: could you confirm your preferred payment email address when you call me back. This information will be very helpful for our team.<br><br>'
    + 'Please feel free to call me back at [your synthetic phone number].</div>'
    + '<p><strong>Coach for.</strong> Shares the synthetic phone number, never a personal number. Keeps it brief enough that the participant does not need to relisten to catch the key ask, which is calling back.</p>'
    + '<p><strong>Fail signals.</strong> Sharing a personal phone number. Leaving no clear callback number or reason to call back.</p>'
    + '<h2>At the door</h2>'
    + '<ul>'
    + '<li>Introduce yourself by name and say who you are with.</li>'
    + '<li>Check the government ID against the booking.</li>'
    + '<li>Confirm the consent documentation is signed before anything is recorded.</li>'
    + '<li>Give a full walkthrough of the floors you will scan and what will happen on each, before you record anything.</li>'
    + '<li>Agree where the household and any pets will wait while each floor is recorded.</li>'
    + '</ul>'
    + '<div class="callout"><div class="c-ic">&#9432;</div><div class="c-tx"><strong>[PLACEHOLDER] Pending from the Atlas leads.</strong> Who sends the Confirmation email now that booking runs through the Atlas Tracker, and the confirmed platform for consent documentation and payment. Treat the wording above as interim and route questions to ben_atlas@centific.com.</div></div>'
  },
  {id:'safety', ic:'&#128737;', title:'Safety Protocol', sub:'Working alone in a stranger home, safely.', min:20, gate:'check', body:
      '<h2>Purpose and scope</h2>'
    + '<p>This protocol protects your physical and psychological safety, keeps decision-making consistent in ambiguous situations, and keeps Atlas compliant with applicable law and company policy. It applies to every Atlas session, all of which take place at a participant private residence.</p>'
    + '<div class="callout danger"><div class="c-ic">&#9888;</div><div class="c-tx"><strong>Atlas moderators work alone.</strong> Every safety decision in a participant home is yours to make, in the moment, without a second moderator to check it against. That is exactly why the rules below are non-negotiable rather than judgment calls.</div></div>'
    + '<h2>Four principles</h2>'
    + '<ol>'
    + '<li><strong>Safety first.</strong> Your safety takes precedence over data collection or session completion. Always. There is no scan worth it.</li>'
    + '<li><strong>Zero tolerance.</strong> Substance influence and aggressive or erratic behaviour result in immediate dismissal of the session.</li>'
    + '<li><strong>Leave when unsafe.</strong> If any aspect of the location or anyone behaviour compromises your safety, leave immediately.</li>'
    + '<li><strong>911 first.</strong> In criminal or dangerous situations, call 911 first, then notify your escalation contact.</li>'
    + '</ol>'
    + '<h2>Definitions</h2>'
    + '<ul>'
    + '<li><strong>Immediate dismissal:</strong> ending a session without delay due to safety or conduct risk.</li>'
    + '<li><strong>Erratic or aggressive behaviour:</strong> threatening language, intimidation, shouting, physical agitation, violence, refusal to follow safety instructions, or any sexual behaviour, whether verbal, non-verbal or physical, including inappropriate comments, gestures, advances or exposure.</li>'
    + '<li><strong>Under the influence:</strong> apparent impairment by alcohol, drugs or controlled substances. Odour, slurred speech, impaired coordination, glassy eyes.</li>'
    + '</ul>'
    + '<h2>Immediate dismissal rules, non-negotiable</h2>'
    + '<p><strong>1. Under the influence.</strong> If a participant, or anyone else present, appears under the influence of drugs or alcohol, terminate the session immediately.</p>'
    + '<div class="script">We cannot proceed with the study today. Thank you for your time.</div>'
    + '<p>Exit. Notify your escalation contact. Do not offer a reschedule, do not discuss payment, and do not explain your reasoning.</p>'
    + '<p><strong>2. Aggressive or erratic behaviour.</strong> If a participant or any person present is aggressive, threatening, erratic, or engages in sexual behaviour, end the session immediately, leave the premises, and notify your escalation contact. <strong>Call 911</strong> if violence, threats or weapons are present.</p>'
    + '<h2>Environmental safety assessment</h2>'
    + '<p>Run this on arrival, every time, before you set up. Your decision is proceed, pause, or leave immediately.</p>'
    + '<ul>'
    + '<li><strong>Exterior:</strong> lighting, visible hazards, loitering, signs of illegal activity.</li>'
    + '<li><strong>Entryway:</strong> clear exits, clutter, animals, chemical or drug odours, weapons in view.</li>'
    + '<li><strong>Interior:</strong> number of people present, calm demeanour, noise level, cooperation with instructions.</li>'
    + '<li><strong>Your positioning:</strong> near an exit, with an unobstructed path to it.</li>'
    + '</ul>'
    + '<h2>Private residence procedure</h2>'
    + '<p><strong>Arrival and entry.</strong></p>'
    + '<ul>'
    + '<li>Park in a well-lit area and avoid blocking exits, including your own.</li>'
    + '<li>Conduct the visual safety assessment above. <strong>If it is unsafe, do not enter.</strong> Notify your escalation contact from your vehicle.</li>'
    + '<li>Verify the participant identity and confirm consent before you enter the capture area.</li>'
    + '</ul>'
    + '<p><strong>During the session.</strong></p>'
    + '<ul>'
    + '<li>Keep an unobstructed path to the exit as you move through the home. You are carrying a rig and moving between floors, so think about this on every floor, not just the ground floor.</li>'
    + '<li>Keep valuables secured and out of sight.</li>'
    + '<li>If anything feels unsafe, whether the environment, someone behaviour, or a third party who arrives, <strong>leave immediately</strong>.</li>'
    + '<li>For criminal or dangerous situations, call 911.</li>'
    + '</ul>'
    + '<p><strong>Departure.</strong></p>'
    + '<ul>'
    + '<li>Confirm check-out.</li>'
    + '<li>File an incident report within 24 hours if anything happened.</li>'
    + '</ul>'
    + '<div class="script">We need to step out and reschedule. We will follow up through the coordinator.</div>'
    + '<p>That is your line for leaving because of a safety concern. It is complete. You do not owe an explanation.</p>'
    + '<h2>Check-in and check-out</h2>'
    + '<div class="callout warn"><div class="c-ic">&#9888;</div><div class="c-tx"><strong>[PLACEHOLDER] Lone-worker controls being finalised by the Atlas leads.</strong> The source protocol was written for two-moderator sessions. The Atlas single-moderator check-in and check-out procedure, the expected-end-time rule and the missed check-out response will be published here before fieldwork begins. Until then, follow the interim rule below and raise anything unclear with Kayla Garcia.</div></div>'
    + '<p><strong>Interim rule.</strong> Notify your escalation contact when you arrive, including the participant identifier, the address and your expected end time. Notify them again when you leave. If your plan changes during the visit, say so.</p>'
    + '<h2>Escalation matrix</h2>'
    + '<ul>'
    + '<li><strong>Level 1, unsafe feeling or ambiguous concern:</strong> leave, notify, document.</li>'
    + '<li><strong>Level 2, aggression or erratic behaviour:</strong> immediate dismissal, leave, notify.</li>'
    + '<li><strong>Level 3, criminal activity, imminent danger, weapons or threats:</strong> call 911, move to a safe area, then notify.</li>'
    + '<li><strong>Level 4, moderator non-response:</strong> your escalation contact initiates a safety check and may contact 911. This is the level that depends on you checking in and out reliably.</li>'
    + '</ul>'
    + '<p>Your escalation contact on Atlas is <strong>Kayla Garcia, Senior Project Manager</strong>, kayla.garcia@centific.com, reachable in the Atlas Moderators channel in Microsoft Teams.</p>'
    + '<h2>Incident reporting</h2>'
    + '<p>Report any safety-related incident within <strong>24 hours</strong>: a dismissal, an unsafe environment, aggressive behaviour, an injury, a threat or suspected criminal activity. Include the date and time, the location, who was present, a description, the actions you took, the escalation steps and the outcome. Use the template your supervisor provides and store reports securely per the data retention policy.</p>'
    + '<p><strong>Document from a safe location.</strong> Leave first, write it up second.</p>'
    + '<h2>Privacy and recording conduct</h2>'
    + '<ul>'
    + '<li>Obtain and confirm written consent before recording anything.</li>'
    + '<li><strong>Do not capture third parties.</strong> On Atlas nobody is captured at all, so if a person or pet enters the floor you are recording, stop, reset the floor, and re-record that walk from the start.</li>'
    + '<li>Follow data minimisation and secure handling practices. No sharing outside designated systems, ever, including showing a capture to the household.</li>'
    + '</ul>'
    + '<h2>Prohibited conduct</h2>'
    + '<p>You must not:</p>'
    + '<ul>'
    + '<li>Remain in an environment you perceive as unsafe.</li>'
    + '<li>Attempt to physically restrain anyone.</li>'
    + '<li>Negotiate with an aggressive individual.</li>'
    + '<li>Carry weapons or conduct personal security interventions.</li>'
    + '<li>Accept gifts from participants.</li>'
    + '</ul>'
    + '<div class="callout"><div class="c-ic">&#9432;</div><div class="c-tx"><strong>Acknowledgment.</strong> All moderators must read, understand and acknowledge the Safety Protocol before fieldwork. You will sign it separately once the Atlas leads publish the signature document. Completing this module does not replace that signature.</div></div>'
  },
  {id:'upload', ic:'&#9729;', title:'Data Upload and Storage', sub:'Getting the capture off the devices and confirmed.', min:10, gate:'none', cta:'Mark complete', body:
      '<div class="awaiting"><div class="a-ic">&#9998;</div><div class="a-tx"><strong>[PLACEHOLDER] Data upload and storage content in preparation.</strong> The upload destination and the connectivity fallback are being confirmed by the Atlas leads.</div></div>'
    + '<h2>What this module will cover</h2>'
    + '<ul>'
    + '<li>[PLACEHOLDER] The designated cloud storage endpoint and how you connect to it.</li>'
    + '<li>[PLACEHOLDER] Verifying an upload completed, rather than assuming it started.</li>'
    + '<li>[PLACEHOLDER] What to do when the home network cannot carry the upload.</li>'
    + '<li>[PLACEHOLDER] Whether, and when, uploading from the office is permitted.</li>'
    + '<li>[PLACEHOLDER] Retention on the devices, and when captures may be cleared.</li>'
    + '</ul>'
    + '<p>The rule that already applies: all scan data must be verified as successfully uploaded before a home visit is closed out, and partial uploads are never acceptable.</p>'
  },
  {id:'troubleshooting', ic:'&#128295;', title:'Troubleshooting', sub:'When something goes wrong in the field.', min:10, gate:'none', cta:'Mark complete', body:
      '<div class="awaiting"><div class="a-ic">&#9998;</div><div class="a-tx"><strong>[PLACEHOLDER] Troubleshooting content in preparation.</strong> This module will be published once the field issues from pilot sessions are collected.</div></div>'
    + '<h2>What this module will cover</h2>'
    + '<ul>'
    + '<li>[PLACEHOLDER] Tracking loss: causes, prevention and the re-record rule.</li>'
    + '<li>[PLACEHOLDER] A device that stops recording mid-walk.</li>'
    + '<li>[PLACEHOLDER] Storage or battery running out on site.</li>'
    + '<li>[PLACEHOLDER] Upload failures and retries.</li>'
    + '<li>[PLACEHOLDER] When to re-record, when to flag, and when to end the visit.</li>'
    + '</ul>'
    + '<p>Until this module is live, the standing rule holds: a scan that loses tracking or ends prematurely is re-recorded from the start of that floor walk, and anything you cannot resolve gets flagged to your Project Manager rather than left for QA to find.</p>'
  },
  {id:'hours', ic:'&#9201;', title:'Your Hours and Pay', sub:'How your time is recorded and paid.', min:10, gate:'none', cta:'Mark complete', body:
      '<div class="awaiting"><div class="a-ic">&#9998;</div><div class="a-tx"><strong>[PLACEHOLDER] Hours and pay content in preparation.</strong> The Atlas leads are confirming the detail below. This module will be published with a knowledge check before in-person training.</div></div>'
    + '<h2>What this module will cover</h2>'
    + '<ul>'
    + '<li>[PLACEHOLDER] When your paid time starts and stops on a session day.</li>'
    + '<li>[PLACEHOLDER] Which timesheet system Atlas uses, and the submission cadence.</li>'
    + '<li>[PLACEHOLDER] How travel time between homes is treated.</li>'
    + '<li>[PLACEHOLDER] The mileage policy and rate, and what is and is not reimbursable.</li>'
    + '<li>[PLACEHOLDER] Who to ask about hours, and who to ask about pay.</li>'
    + '</ul>'
    + '<div class="callout"><div class="c-ic">&#9432;</div><div class="c-tx"><strong>The Mileage tab is provisional.</strong> You can see it in the app now, but do not treat it as the system of record until this module confirms it. Raise pay and hours questions with your Project Manager in the meantime.</div></div>'
  },
  {id:'final_tasks', ic:'&#9989;', title:'Final Tasks to Complete Atlas Onboarding', sub:'The last steps before the final assessment.', min:10, gate:'none', cta:'Mark complete', body:
      '<h2>You are nearly there</h2>'
    + '<p>Finishing the modules is not the end of onboarding. Four things have to be done before you are cleared for fieldwork on Atlas.</p>'
    + '<h2>1. Pass the final assessment</h2>'
    + '<p>The 40-question final assessment unlocks once every module is complete. It covers only what is in this app. You need <strong>85%</strong>, which is 34 of 40, and you get <strong>3 attempts</strong>. Answers lock when you select them, and the review screen shows which questions you got wrong but never reveals the correct answer. If you use all three attempts, the screen tells you who to contact.</p>'
    + '<h2>2. Register your synthetic phone number</h2>'
    + '<p>Every call, text and voicemail you send a participant goes through your synthetic number, never your personal number. Register it before your first booking confirmation.</p>'
    + '<h2>3. Complete the Safety Protocol document</h2>'
    + '<p>You will receive the Atlas Safety Protocol document to read and sign. It is not a formality. Sign it on the basis that you have read the Safety Protocol module in this app and can act on it: the immediate dismissal rules, the environmental assessment, the escalation levels and the check-in and check-out procedure.</p>'
    + '<div class="callout"><div class="c-ic">&#9432;</div><div class="c-tx"><strong>[PLACEHOLDER] The signature document is being prepared by the Atlas leads</strong> and will be sent to you for electronic signature. The link will appear in the Resources tab when it is live.</div></div>'
    + '<h2>4. Request your ID badge and lanyard</h2>'
    + '<p>You need a Centific ID badge before you arrive at a participant home. Request it using the form below, and allow time for it to be produced.</p>'
    + '<p><a href="https://forms.office.com/r/sMu2K8ivYw" target="_blank" rel="noopener">Request your ID badge and lanyard &#8599;</a></p>'
    + '<h2>Then: in-person training</h2>'
    + '<p>Once you have completed this app, you attend in-person training at Centific HQ:</p>'
    + '<div class="callout"><div class="c-ic">&#128205;</div><div class="c-tx"><strong>14980 NE 31st St, Suite 100, Redmond, WA 98052.</strong> Training only. No Atlas collection ever happens at HQ; every session is at a participant home.</div></div>'
    + '<p>Bring your ID badge if it has arrived, and your questions. The workflow, the rig and the role-play cards all get hands-on time there.</p>'
    + '<p>Press Mark complete below to finish this module and unlock the final assessment.</p>'
  }
];

// Knowledge-check questions per module id. Each question has a stable id (do not reuse ids). The app shuffles the answer order for every moderator,
// so write the correct answer wherever you like. Never write options such as "all of the above" or "both A and B".
const MOD_QUESTIONS_DEFAULT = {
  centific: [
    {id:"m_centific_1", q:"A participant asks which company the scans are for. What do you say?", opts:["Name the client, since the participant signed an NDA", "Confirm it if the participant guesses correctly", "Say you genuinely have no idea who the client is", "Say you are not able to share the client name, and explain what the data is used for instead"], a:3},
    {id:"m_centific_2", q:"How would you describe what Centific does?", opts:["It builds the consumer AI products people use by name", "It is a global data and AI company that builds the data AI products learn from", "It is a market research firm that collects opinions", "It is a home improvement contractor"], a:1},
    {id:"m_centific_3", q:"On Atlas, which part of QA is yours?", opts:["None, a QA moderator reviews everything behind you", "The final accept or reject decision for every session", "First-line quality judgment and re-recording what clearly fails, but not the final accept or reject decision", "Only the metadata, never the capture itself"], a:2},
    {id:"m_centific_4", q:"Who is your day-to-day escalation contact on Atlas?", opts:["Kayla Garcia, Senior Project Manager", "David Kang, Technical Program Manager", "Sander Denecker, Program Manager", "Ingrid Lindstrom, Training and Development"], a:0},
    {id:"m_centific_5", q:"A participant asks something about data retention that you were not briefed on. What is the correct response?", opts:["Give your best guess so they are not left waiting", "Tell them nobody can answer that", "Tell them to ask the client directly", "Say you do not have that detail and route them to ben_atlas@centific.com"], a:3},
    {id:"m_centific_6", q:"Why does the data collection team describe quality as the product rather than volume?", opts:["Because moderators are paid per accepted scan", "Because clients only pay for the first session", "Because a large pile of unusable scans is worth nothing, and the team is measured on what passes QA", "Because volume targets are set by the participant"], a:2},
    {id:"m_centific_7", q:"A participant asks whether they will appear in the recording. What is accurate on Atlas?", opts:["They appear only in wide shots", "No, Atlas captures rooms and not people, which is why the household stays off the floor being scanned", "Yes, but their face is blurred automatically", "Only if they walk through while recording, and that is acceptable"], a:1}
  ],
  fundamentals: [
    {id:"m_fundamentals_1", q:"What is the purpose of the script cards in this module?", opts:["Scaffolding that teaches the right posture, assessed on approach rather than exact recall", "Lines to be memorised and recited word for word", "A legal script that must be read verbatim in every situation", "Optional reading for experienced moderators"], a:0},
    {id:"m_fundamentals_2", q:"A participant asks on site whether there is a bonus available. What do you do?", opts:["Quote the bonus figure you remember from the project brief", "Tell them bonuses do not exist on this project", "Say any bonus terms are in their documentation, that you have no figures to quote on site, and route them to ben_atlas@centific.com", "Offer a small amount from your own pocket to keep things pleasant"], a:2},
    {id:"m_fundamentals_3", q:"A participant appears intoxicated when you arrive. What is the correct handling?", opts:["Run a shortened session and note it in the log", "Explain why you are leaving, offer to reschedule, and discuss their payment", "Ask them to sober up and wait in your car", "Say you cannot proceed today, leave without giving reasons or offering a reschedule, then escalate and document from a safe location"], a:3},
    {id:"m_fundamentals_4", q:"Partway through, a participant asks to stop. What is the right response?", opts:["Explain that stopping now forfeits everything so they should continue", "Accept it immediately without pressure, and route the pay and withdrawal terms to their documentation and the project inbox", "Finish the current floor first since the recording is already running", "Tell them you need manager approval before stopping"], a:1},
    {id:"m_fundamentals_5", q:"A participant asks you to skip a room so the visit finishes faster. What do you do?", opts:["Explain kindly that every room is part of what makes the scan usable, offer flexibility on pace and breaks, but not on required content", "Skip the second lighting walk instead as a compromise", "Skip it, since one room makes little difference", "End the session and reschedule"], a:0},
    {id:"m_fundamentals_6", q:"A participant asks to see the capture you just recorded. What is the correct approach?", opts:["Play it back so they feel reassured", "Refuse flatly and say it is confidential", "Offer to email them a copy later", "Validate the curiosity, then keep moving for pace and consistency, and point to their documentation and the project inbox for anything further"], a:3},
    {id:"m_fundamentals_7", q:"A participant makes repeated flirtatious comments after you have redirected once. What do you do?", opts:["Laugh it off and carry on so the session is not wasted", "Debate the comment until they understand why it is inappropriate", "State the professional boundary once more with a clear end-and-leave line, and if it continues, end the session, leave, then notify Kayla Garcia and document from safety", "Finish the remaining floors quickly and say nothing afterwards"], a:2}
  ],
  workflow: [
    {id:"m_workflow_1", q:"How many scan walks does each floor of a home require, and under what conditions?", opts:["One walk with all lights on", "Two walks, both with curtains closed", "Three walks at different times of day", "Two walks: curtains open with daylight only and indoor lights off, then curtains closed with indoor lights on"], a:3},
    {id:"m_workflow_2", q:"A home has no curtains or blinds anywhere. What is required?", opts:["The session cannot proceed", "Two walks per floor, both in daylight", "One daytime walk per floor is sufficient", "Walks must be recorded after dark instead"], a:2},
    {id:"m_workflow_3", q:"What is the minimum free storage required on every device before a collection session begins?", opts:["2 GB per device", "8 GB per device", "4 GB per device", "16 GB per device"], a:1},
    {id:"m_workflow_4", q:"Tracking drops halfway through a floor walk. What do you do?", opts:["Re-record the walk from the start of that floor, because partial uploads are not acceptable", "Upload the partial walk and note it in the log", "Resume recording from the point where tracking dropped", "Continue and let QA decide whether it is usable"], a:0},
    {id:"m_workflow_5", q:"Which describes the correct scanning technique?", opts:["Stand in the centre of each room and rotate slowly in place", "Walk at about one step per second through the centre of rooms, keeping continuous translational motion and maximum practical distance from walls", "Walk quickly along the walls to cover ground efficiently", "Pause at each doorway for a few seconds before continuing"], a:1},
    {id:"m_workflow_6", q:"The participant cat wanders onto the floor while you are recording. What is the correct action?", opts:["Stop, reset the floor, and re-record that walk from the start", "Keep recording, animals are acceptable", "Keep recording and note the cat in the session log", "Pick the cat up and carry on recording"], a:0},
    {id:"m_workflow_7", q:"Which of these is part of the required deliverable for a completed home visit?", opts:["A photograph of the exterior of the home", "A signed participant feedback survey", "A session log recording the home identifier, floor number, lighting condition used and upload confirmation status", "A written description of the furniture in each room"], a:2}
  ],
  comms: [
    {id:"m_comms_1", q:"When does booking confirmation start, and in what order do you make contact?", opts:["On the day, by calling first and texting only if there is no answer", "A week before, by email only", "No earlier than 24 hours before, by text first, then a call if there is no reply within 3 hours, then voicemail", "On arrival at the home"], a:2},
    {id:"m_comms_2", q:"Which phone number do you give a participant?", opts:["Your personal mobile, so they can reach you easily", "Your synthetic phone number, always", "The project inbox phone line", "Your Project Manager number"], a:1},
    {id:"m_comms_3", q:"You have sent the confirmation text and had no reply for three hours. What is next?", opts:["Call the participant", "Send the same text again", "Leave a voicemail without calling first", "Cancel the booking"], a:0},
    {id:"m_comms_4", q:"What must be true of the booking text before you send it?", opts:["It has been shortened to fit one screen", "The arrival time has been padded by 30 minutes", "The payment language has been reworded in your own voice", "Every bracketed placeholder is filled in, and the address is exact and unedited"], a:3},
    {id:"m_comms_5", q:"On the confirmation call, when should you deliver the reminders?", opts:["Immediately, before anything else, to save time", "Only if the participant asks for them", "After confirming it is a good time to talk, pausing for participant questions between blocks", "In a follow-up text instead"], a:2},
    {id:"m_comms_6", q:"What should a participant have ready for the session?", opts:["A printed copy of the project brief", "Proof of home ownership", "A recent utility bill", "A valid, unexpired government ID"], a:3},
    {id:"m_comms_7", q:"Which of these belongs in the pre-session reminders for an Atlas booking?", opts:["That the participant should tidy and rearrange furniture before you arrive", "That the floor being scanned needs to be clear of people and pets while you record", "That the participant should follow you with their phone to film the process", "That the participant should invite neighbours to observe"], a:1}
  ],
  safety: [
    {id:"m_safety_1", q:"Which principle governs every Atlas safety decision?", opts:["Your safety takes precedence over data collection or session completion", "Complete the session wherever possible, then report concerns", "Defer the decision to your Project Manager before acting", "Finish the current floor before leaving"], a:0},
    {id:"m_safety_2", q:"On arrival you notice a chemical odour and weapons visible in the entryway. What do you do?", opts:["Enter and assess further from inside", "Ask the participant to move the items, then proceed", "Proceed but stay near the door", "Do not enter, leave, and notify your escalation contact"], a:3},
    {id:"m_safety_3", q:"A third party arrives mid-session and becomes aggressive. What is the correct sequence?", opts:["Try to calm them down and continue if they settle", "Pause recording and wait until they leave", "End the session immediately, leave the premises, notify your escalation contact, and call 911 if violence, threats or weapons are present", "Ask the participant to remove them, then carry on"], a:2},
    {id:"m_safety_4", q:"What is the correct line when you are leaving a session because of a safety concern?", opts:["A full explanation of what made you uncomfortable", "That you need to step out and reschedule, and will follow up through the coordinator", "An apology and an offer to return the same evening", "A promise that the participant will still be paid"], a:1},
    {id:"m_safety_5", q:"Within what period must a safety-related incident be reported?", opts:["By the end of the week", "Within 72 hours", "Within 24 hours", "Only if an injury occurred"], a:2},
    {id:"m_safety_6", q:"Level 4 on the escalation matrix covers moderator non-response. Why does it depend on you?", opts:["Because it determines your pay for the session", "Because your escalation contact can only initiate a safety check if they know you arrived and have not checked out", "Because it is reported to the client", "Because it replaces the incident report"], a:1},
    {id:"m_safety_7", q:"Which of these is prohibited conduct for an Atlas moderator?", opts:["Accepting a gift from a participant", "Calling 911 before notifying your escalation contact in a dangerous situation", "Leaving a session that feels unsafe before it is complete", "Declining to enter a home after the arrival assessment"], a:0}
  ]
};

// Final assessment QUESTION BANK. 81 questions. Each moderator attempt draws FINAL_QUESTION_COUNT of them at random, in a random order, with the answer
// choices shuffled, and always includes at least FINAL_MIN_PER_TOPIC questions from every topic (see the two settings below the bank). Add as many as you like.
// Rules: every question must test PROJECT information (not how this app works); every question needs a unique id (next free: f119), never reuse or renumber ids
// (retired ids: f005, f007, f016, f018, f019, f020, f030, f040, f042, f043, f044, f045, f046, f047, f048, f049, f051, f052, f053, f055, f056, f059, f065, f074, f075, f079, f080, f089, f090, f093, f094, f099, f101, f104, f110, f116, f117);
// "mod" is only a label for admins; no "all of the above", "none of the above" or "both A and B" options (they break when answers are shuffled);
// give wrong answers a similar length to the right one, so the right answer is not obvious.
const FINAL_CHECK_DEFAULT = [
    {id:"f001", mod:"welcome", q:"What does Project Atlas capture?", opts:["Video of participants moving through their homes day to day","Exterior photographs of residential properties and gardens","Audio interviews with homeowners about their living spaces","3D spatial scans of the interior of residential homes"], a:3},
    {id:"f002", mod:"welcome", q:"Where does Atlas data collection take place?", opts:["At Centific HQ in Redmond", "At participant private residences", "At rented study facilities", "At a mix of HQ and participant homes"], a:1},
    {id:"f003", mod:"welcome", q:"What is Centific HQ in Redmond used for on Atlas?", opts:["In-person moderator training only", "Collection sessions with participants", "Equipment storage only", "Participant recruitment interviews"], a:0},
    {id:"f004", mod:"welcome", q:"How many moderators staff an Atlas session?", opts:["Two, a lead moderator onsite and a support moderator offsite","Two, a primary and a QA moderator working together","One, working solo as both primary and QA moderator","It varies with the size of the home being scanned"], a:2},
    {id:"f006", mod:"centific", q:"Which best describes Centific?", opts:["A consumer AI product company that sells apps to the public","A property surveying firm that measures and values homes","A global data and AI company that builds the data AI products learn from","A staffing agency that places field technicians with clients"], a:2},
    {id:"f008", mod:"centific", q:"On Atlas, who is the Program Manager?", opts:["Kayla Garcia", "Sander Denecker", "David Kang", "Ingrid Lindstrom"], a:1},
    {id:"f009", mod:"centific", q:"Who is the architect of the Atlas Tracker App?", opts:["Ingrid Lindstrom, Training and Development", "Kayla Garcia, Senior Project Manager", "Sander Denecker, Program Manager", "David Kang, Technical Program Manager"], a:3},
    {id:"f010", mod:"centific", q:"Which email address do you give participants for questions about pay, consent or data use?", opts:["Your own Centific address", "ben_atlas@centific.com", "kayla.garcia@centific.com", "The client support address"], a:1},
    {id:"f011", mod:"centific", q:"Which of these is NOT part of the moderator role on Atlas?", opts:["Running the captures to the project specification","Entering session metadata into the Atlas Tracker","Making the final accept or reject decision on a session","Verifying the upload before you leave the home"], a:2},
    {id:"f012", mod:"centific", q:"What does being your own QA mean in practice on Atlas?", opts:["You review the session recordings of another moderator before leaving","You check the metadata and decide later whether QA will see the session","You leave the review to a QA reviewer, since you are the only moderator","You skip QA because there is no second moderator on site"], a:0},
    {id:"f013", mod:"centific", q:"A participant asks a policy question you were not briefed on. What is the professional answer?", opts:["Improvise a reasonable answer so they are not left waiting", "Call your Project Manager during the session to get an answer", "Tell them the information is confidential", "Say you do not have that detail and route them to the project inbox"], a:3},
    {id:"f014", mod:"centific", q:"Why does it matter how you handle yourself in a participant home?", opts:["Because for most participants you are the only person from Centific they will ever meet","Because the client observes sessions remotely and rates each visit","Because participants rate every moderator in a survey after the visit","Because the footage includes your voice and your reflection"], a:0},
    {id:"f015", mod:"workflow", q:"How many smartphones does the Atlas rig hold?", opts:["Three", "Four", "Five", "Six"], a:2},
    {id:"f017", mod:"workflow", q:"What are the two lighting conditions for the two walks on a floor?", opts:["Both walks with curtains open and indoor lights switched on","Walk 1 curtains closed with lights on; Walk 2 curtains closed with lights off","Walk 1 daylight with lights on; Walk 2 after dark with lights off","Walk 1 curtains open with daylight only and indoor lights off; Walk 2 curtains closed with indoor lights on"], a:3},
    {id:"f021", mod:"workflow", q:"Someone opens a blind while you are mid-walk. What is the consequence?", opts:["Nothing, as long as you note the change in the session log","You switch that walk over to the other lighting condition and carry on","You finish the walk and then adjust the lighting for the next floor","The lighting condition changed mid-walk, so the walk is void and must be re-recorded"], a:3},
    {id:"f022", mod:"workflow", q:"What must happen to ceiling fans and standing fans during recording?", opts:["They must be set to the lowest speed", "They may run if they are out of frame", "They must be turned off", "They must be removed from the room"], a:2},
    {id:"f023", mod:"workflow", q:"Why is standing still and rotating in place not permitted?", opts:["It wastes session time that the participant has agreed to give","The camera must maintain continuous translational motion for reliable tracking","It produces duplicate frames that the QA reviewers will reject on sight","It drains the phone batteries faster and overheats the rig quickly"], a:1},
    {id:"f024", mod:"workflow", q:"How should you frame the camera relative to walls and furniture?", opts:["At maximum practical distance, to capture wide-angle room views","As close as possible to the surfaces, to capture fine detail","Pointing down at the floor throughout, to keep the path clear","Pointing at the brightest light in each room, for best exposure"], a:0},
    {id:"f025", mod:"workflow", q:"Why should the camera avoid pointing directly at windows, skylights and lamps?", opts:["It can identify the participant", "It is a privacy requirement", "It overheats the devices", "It degrades tracking"], a:3},
    {id:"f026", mod:"workflow", q:"Which areas should be prioritised in your framing to keep tracking reliable?", opts:["Blank walls and empty corners that are easy to keep in frame","Feature-rich areas such as textured surfaces, furniture, patterns and decor","Ceiling areas and the empty space above the furniture line","Windows and other bright light sources that fill the frame"], a:1},
    {id:"f027", mod:"workflow", q:"A walk ends prematurely on one device. What is required?", opts:["Upload what was captured and flag the gap for the QA reviewers","Continue to the next floor and return later if time allows","Re-record that floor walk from the start, because partial uploads are not acceptable","Substitute the recording from another device on the same rig"], a:2},
    {id:"f028", mod:"workflow", q:"What must be true before you leave the home or close out the visit?", opts:["All scan data has been verified as successfully uploaded to the designated cloud storage","The participant has signed a feedback form about the visit","The devices have been factory reset and wiped of local files","The participant has been told the date their payment will arrive"], a:0},
    {id:"f029", mod:"workflow", q:"What does the session log record for every scan?", opts:["Room dimensions and a furniture inventory for each floor","Participant name, age and occupation for the visit record","Home identifier, floor number, lighting condition used and upload confirmation status","Device serial numbers and battery levels at the start and end"], a:2},
    {id:"f031", mod:"comms", q:"How far in advance may the confirmation text be sent?", opts:["No earlier than 24 hours before the session", "At least a week before", "On the morning of the session", "Immediately after booking, whenever that is"], a:0},
    {id:"f032", mod:"comms", q:"How long do you wait for a reply to the confirmation text before calling?", opts:["1 hour", "24 hours", "12 hours", "3 hours"], a:3},
    {id:"f033", mod:"comms", q:"The participant does not pick up your call. What do you do?", opts:["Leave the voicemail script rather than calling again immediately","Call repeatedly until they answer so the booking is not missed","Send a second text instead and wait another day for a reply","Mark the booking as cancelled and tell the project coordinator"], a:0},
    {id:"f034", mod:"comms", q:"What must never appear in a text, call or voicemail to a participant?", opts:["Your synthetic phone number", "Your personal phone number", "The session date and time", "The project name"], a:1},
    {id:"f035", mod:"comms", q:"What do you confirm at the door before anything is recorded?", opts:["The participant opinion of AI technology", "The participant preferred payment amount", "The participant government ID and that consent documentation is signed", "That the participant has read the client website"], a:2},
    {id:"f036", mod:"safety", q:"A participant appears under the influence. What is the correct handling?", opts:["Reschedule politely and explain to them why you are doing so","Wait an hour, then reassess whether the session can go ahead","Run a shortened session and document your concerns afterwards","Terminate immediately, give no reasons, do not discuss payment or rescheduling, leave and escalate"], a:3},
    {id:"f037", mod:"safety", q:"What are the three possible outcomes of the environmental safety assessment on arrival?", opts:["Enter, wait, or call the participant", "Proceed, reschedule, or report", "Proceed, pause, or leave immediately", "Scan, flag, or cancel"], a:2},
    {id:"f038", mod:"safety", q:"In a criminal or immediately dangerous situation, what is the order of actions?", opts:["Notify your escalation contact, then call 911 if they advise it", "Call 911 first, then notify your escalation contact", "Leave quietly and report the next day", "Document the incident before leaving the property"], a:1},
    {id:"f039", mod:"final_tasks", q:"Which of these are you required to complete before fieldwork, in addition to passing the final assessment?", opts:["Complete a background interview with the client team in Redmond","Submit a sample scan of your own home for the QA reviewers","Shadow a second moderator for a full day of live sessions","Register your synthetic phone number, complete the Safety Protocol document, and request your ID badge"], a:3},
    {id:"f118", mod:"final_tasks", q:"After the online onboarding, what comes before you collect any data?", opts:["Start collection sessions at participant homes, supervised by video call", "A second online assessment covering the in-person training content", "In-person training at Centific HQ, with hands-on time on the rig", "A shadow day with a client representative at a participant home visit"], a:2},
    {id:"f041", mod:"welcome", q:"What is the data captured on Atlas used to train?", opts:["Navigation systems that guide cars on outdoor roads", "Voice assistants that respond to spoken commands in the home", "AI models for indoor scene understanding and 3D floor plan reconstruction", "Facial recognition systems used for residential security"], a:2},
    {id:"f050", mod:"centific", q:"About how many domain experts are in the Centific network?", opts:["Over 1.8 million", "About 18,000", "About 180,000", "Over 18 million"], a:0},
    {id:"f054", mod:"centific", q:"Where do you reach Kayla Garcia day to day?", opts:["By calling the participant", "The project inbox, ben_atlas@centific.com", "The Atlas Tracker App notes field", "The Atlas Moderators channel in Microsoft Teams"], a:3},
    {id:"f057", mod:"centific", q:"Why is a rejected Atlas session especially costly?", opts:["It lowers the participant's pay rate for every future project they join", "It can mean a second visit to a stranger's home plus lost effort", "It permanently removes that home from the Atlas dataset", "It is billed back to the moderator who ran the session"], a:1},
    {id:"f058", mod:"centific", q:"A participant asks whether their home will be identifiable in the data. What is the right approach?", opts:["Be straightforward about what is in frame and point to the consent documentation","Promise that every image is blurred before anyone at Centific ever sees it","Say the scans are deleted as soon as the quality review has finished","Tell them it is technically impossible to identify any home from a scan"], a:0},
    {id:"f060", mod:"centific", q:"Why can real home interiors not simply be scraped or rendered?", opts:["Because rendered scenes are far too large to store or move around","Because every home is private property and cannot lawfully be photographed","They must be captured with consent, because rendered scenes get lighting and geometry subtly wrong","Because scraped images never include a date or location stamp for use"], a:2},
    {id:"f061", mod:"centific", q:"A participant guesses which company the data is for. What do you do?", opts:["Change the subject and hope the question is forgotten", "Confirm quietly if they guess right, since they already know", "Say it is a well-known technology company without naming it", "Do not confirm or hint; say you cannot share the client name"], a:3},
    {id:"f062", mod:"centific", q:"A participant asks Am I doing it right? On Atlas, what is the accurate reassurance?", opts:["They should follow you through each room to check the cameras", "There is nothing they can get wrong; their job is to keep the floor clear", "They need to stay in view of the rig throughout each walk", "They should watch the phone screens and tell you if anything looks wrong"], a:1},
    {id:"f063", mod:"fundamentals", q:"Which three things does every script card treat as the spine of compliance?", opts:["Never be late, always smile, always take notes", "Always quote the rate, always give a bonus, always collect cash", "Never name the client, never quote bonus figures on site, never handle money", "Never talk about the scan, never answer questions, never leave the room"], a:2},
    {id:"f064", mod:"fundamentals", q:"A participant asks how and when they get paid. What is the compliant answer?", opts:["It is in the participant documentation, and ben_atlas@centific.com can confirm","Quote the rate and the payment date from memory to reassure them","Say payment is made in cash by you at the end of the visit","Tell them to ask the client directly about their payment status"], a:0},
    {id:"f066", mod:"fundamentals", q:"A participant has limited English. What is the right adjustment?", opts:["Slow down, show each step visually and check understanding after each one","Speak louder and faster so you can finish the visit sooner","Skip the walkthrough and start recording the floor straight away","Waive the consent requirements so that it is easier for everyone"], a:0},
    {id:"f067", mod:"fundamentals", q:"A participant admits they never read the consent documentation. What comes before any recording?", opts:["Ask them to read it while you scan", "Start recording and explain afterwards", "Confirm the consent documentation is signed", "Skip it, since they agreed by booking"], a:2},
    {id:"f068", mod:"fundamentals", q:"A participant is not ready on time and asks for an hour. What is the right call?", opts:["Tell the participant off for being late and then start", "Rush every floor so the visit still ends at the planned time", "Offer partial pay for a shorter session they can fit in", "Check whether a full quality capture still fits, and reschedule rather than rush"], a:3},
    {id:"f069", mod:"fundamentals", q:"A participant is frustrated after a long wait. What does good de-escalation look like?", opts:["Blame the equipment loudly and apologise on its behalf", "Own the experience plainly, stay calm and reset without offering cash", "Offer a cash bonus to smooth things over and move on", "Push ahead faster so you make up the lost time"], a:1},
    {id:"f070", mod:"fundamentals", q:"A participant asks you to watch their child or dog while you scan. What do you do?", opts:["Hold the dog on a lead while you carry out the scan", "Agree, as long as it is only for a minute or two", "Kindly refuse, explain the floor must stay clear, and offer the correct channel", "Hand the child to another resident and carry on scanning"], a:2},
    {id:"f071", mod:"fundamentals", q:"On arrival the home is too cluttered for clear, walkable paths. What is the right decision?", opts:["Explain you cannot proceed today and reschedule", "Scan around the clutter anyway", "Move the furniture yourself", "Record only the rooms that are tidy and call it done"], a:0},
    {id:"f072", mod:"fundamentals", q:"How soon after arrival should you judge whether the home and participant are workable?", opts:["Before booking, by phone only", "Only after both walks on the first floor", "At the end of the visit", "Within the first fifteen to twenty minutes"], a:3},
    {id:"f073", mod:"fundamentals", q:"A session involves a minor. Who must be present?", opts:["Nobody, provided the child seems calm", "Any neighbour who happens to be available", "The signing guardian, throughout the session", "A second moderator as an escort"], a:2},
    {id:"f076", mod:"tracker", q:"What is the first step of an Atlas visit?", opts:["Receive and review your assignment in the Atlas Tracker", "Park outside the home and wait for the participant to come out", "Introduce yourself at the door and ask to come in", "Set up the rig on the doorstep before anyone answers"], a:0},
    {id:"f077", mod:"workflow", q:"What is the order for confirming a booking with the participant?", opts:["Voicemail first, then call", "Call first, then text, then email", "Text first, then call, then voicemail", "Email only"], a:2},
    {id:"f078", mod:"workflow", q:"Where should you park at a participant's home?", opts:["In a well-lit spot that does not block an exit", "As close to the front door as possible, even if it blocks the drive", "Out of sight around the corner", "Anywhere, as long as it is free"], a:0},
    {id:"f081", mod:"workflow", q:"What is the minimum free storage required on every device before a session?", opts:["No minimum applies on devices released in the last two years", "2 GB, as newer phones record in compressed format", "80 GB, so a full day of homes fits on every device", "8 GB, which is the floor and not the target"], a:3},
    {id:"f082", mod:"workflow", q:"Which device fills storage faster and by about how much?", opts:["An Android, about four times faster than an iPhone", "An iPhone, about four times faster than an Android", "Both fill at the same rate", "An Android, about twice as fast"], a:1},
    {id:"f083", mod:"workflow", q:"What walking pace does the scanning technique call for?", opts:["A pause in each room to rotate and then move", "A brisk walk to finish quickly", "A slow, steady pace of roughly one step per second", "Whatever pace feels natural"], a:2},
    {id:"f084", mod:"workflow", q:"A home has no curtains or blinds anywhere. How many walks does each floor need?", opts:["One daytime walk per floor", "Two walks, one early and one late", "No walks until blinds are installed", "Three walks to compensate"], a:0},
    {id:"f085", mod:"workflow", q:"A home has two floors and curtains throughout. How many walk recordings do you deliver?", opts:["Two, one per floor", "Four, two per floor", "Six", "Three"], a:1},
    {id:"f086", mod:"workflow", q:"What must happen to doors and windows once scanning begins?", opts:["They stay in their original position until the walk is complete","They may be adjusted between rooms if the lighting looks wrong","They should be opened wide to let in as much light as possible","They should be closed behind you as you move through the floor"], a:0},
    {id:"f087", mod:"workflow", q:"Where in a room should your path generally run?", opts:["Straight to the far corner and back", "Along the walls to avoid furniture", "In circles around the same spot", "Through the centre of rooms and hallways"], a:3},
    {id:"f088", mod:"workflow", q:"Where may people, pets and children stand while a floor is being scanned?", opts:["In a doorway if they stay still", "In a corner of the room that is not being filmed", "Entirely off that floor, not even in a corner or doorway", "Anywhere if they wear plain clothes"], a:2},
    {id:"f091", mod:"tracker", q:"What is the Atlas Tracker App for?", opts:["The system of record for sessions: bookings, assignments, metadata and logs","A calendar for personal reminders that holds no session data at all","A store for the participant payment details after each visit","A library of training videos and knowledge checks for moderators"], a:0},
    {id:"f092", mod:"tracker", q:"How do problems with the Tracker in the field get resolved?", opts:["You contact the participant and ask them to reinstall it", "You tell your Project Manager, who takes it to David Kang", "You email the client and wait for their reply", "You wait until the next release fixes it"], a:1},
    {id:"f095", mod:"comms", q:"How early should the participant be ready before the scheduled start?", opts:["1 hour", "10 minutes", "30 minutes", "Right at the scheduled start"], a:1},
    {id:"f096", mod:"comms", q:"What happens if you cannot start within 5 minutes of the scheduled time?", opts:["You scan only the ground floor and finish the rest another day", "You start anyway and simply shorten the visit to fit the time", "You wait up to an hour before deciding whether to start", "The session is cancelled and rescheduled for another day and time"], a:3},
    {id:"f097", mod:"comms", q:"What must a participant do to confirm the booking by text?", opts:["Reply YES to the text", "Call you back", "Sign at the door only", "Email the project inbox"], a:0},
    {id:"f098", mod:"comms", q:"What does a booking text ask the participant to provide?", opts:["Their home Wi-Fi password", "Their preferred payment email", "A photo of the rooms", "Their date of birth"], a:1},
    {id:"f100", mod:"comms", q:"What do you do about a script that still contains [PT Name]?", opts:["Delete the bracket and send the rest of the script as it stands", "Send it anyway and explain the missing details afterwards", "Fill in every bracketed field first; it is not ready to send until you do", "Send it only as a voicemail, where nobody sees the placeholder"], a:2},
    {id:"f102", mod:"final_tasks", q:"When should you register your synthetic phone number?", opts:["Before your first booking confirmation", "After your first session", "Only when a participant asks", "At in-person training day three"], a:0},
    {id:"f103", mod:"safety", q:"What is the first of the four principles of the Safety Protocol?", opts:["Finish the first floor before you decide anything about safety","Complete every session you start, whatever the circumstances are","Always follow the participant's instructions about where to go","Safety first: your safety takes precedence over data collection or session completion"], a:3},
    {id:"f105", mod:"safety", q:"Which of these are listed signs of someone being under the influence?", opts:["Wearing casual clothing and a relaxed manner", "Odour, slurred speech, impaired coordination, glassy eyes", "A very quiet voice and slow answers to questions", "Asking many questions about the equipment"], a:1},
    {id:"f106", mod:"safety", q:"Which of these counts as erratic or aggressive behaviour under the protocol?", opts:["Threats, intimidation, shouting, or any sexual behaviour, including inappropriate comments","A participant asking how long the visit will take to finish in total","A participant who is quiet, keeps to themselves and answers briefly","A participant asking a question about payment or about the timing"], a:0},
    {id:"f107", mod:"safety", q:"On arrival the exterior or entryway looks unsafe. What do you do?", opts:["Ask the participant to meet you outside and then continue", "Enter quickly and scan only the ground floor before leaving", "Do not enter, and notify your escalation contact from your vehicle", "Wait an hour to see whether the situation improves, then enter"], a:2},
    {id:"f108", mod:"safety", q:"Where should you position yourself inside the home?", opts:["Wherever the rig fits best, whatever the exits look like", "In the room farthest from the door so you are out of the way", "Behind the participant so you can see what they do", "Near an exit, with an unobstructed path to it"], a:3},
    {id:"f109", mod:"safety", q:"Which escalation level covers aggression or erratic behaviour?", opts:["Level 3: criminal activity and imminent danger only", "Level 1: an unsafe feeling or ambiguous concern only", "Level 2: immediate dismissal, leave, notify", "Level 4: moderator non-response only"], a:2},
    {id:"f111", mod:"safety", q:"What does the interim check-in rule require?", opts:["Text the participant instead of your escalation contact when you arrive or leave", "Check in only if something goes wrong during the visit, and not on arrival or departure", "Send one check-in a week with your total hours and a list of the homes you visited", "Notify your escalation contact on arrival with ID, address and end time, and again on leaving"], a:3},
    {id:"f112", mod:"safety", q:"What should an incident report include?", opts:["Date and time, location, who was present, what happened, actions, escalation and outcome", "Only the date, so the report stays short, simple and quick to file after a visit", "Only your own opinion of the participant and the home, written as a short note", "The participant's payment details and bank information, for the finance team to follow up"], a:0},
    {id:"f113", mod:"safety", q:"Which of these is prohibited conduct for a moderator?", opts:["Calling 911 in danger", "Keeping valuables secured and out of sight", "Leaving an unsafe environment", "Accepting gifts from participants"], a:3},
    {id:"f114", mod:"safety", q:"May you show the capture to the household after a walk?", opts:["Yes, if they ask politely and the capture looks good on the phone","No; nothing is shared outside designated systems, including with the household","Yes, but only for the lowest floor of the home, and only briefly","Yes, as long as you delete the footage from the phones afterwards"], a:1},
    {id:"f115", mod:"safety", q:"Does completing the Safety Protocol module replace signing the Safety Protocol document?", opts:["Only for moderators with previous fieldwork experience", "Yes, the module is enough and the document is optional", "No; you sign the document separately once it is published", "Only if you pass the final assessment on the first attempt"], a:2},
];

// Rules (defaults, adjust here)
const FINAL_PASS_PCT = 85;          // pass mark for the final assessment
const FINAL_QUESTION_COUNT = 40;   // how many questions each final attempt draws from the bank above (if the bank is smaller, all are used)
const FINAL_MIN_PER_TOPIC = 3;    // every final attempt includes at least this many questions from EACH topic (fewer only if a topic has fewer questions)
const FINAL_MAX_TOPIC_PCT = 25;    // and no single topic supplies more than this share of an attempt
const FINAL_MAX_ATTEMPTS = 3;       // attempts before lockout (admin can grant extra attempts)
// Knowledge-check answer rules (module checks). Pick ONE mode:
//   'strict'  = an answer locks the moment it is picked; to change it the learner resets the check (Retry) and does it again. Score = % correct.
//   'lenient' = Sesame style: after a wrong pick the learner may keep picking until correct; only the FIRST pick counts toward the score.
// The final assessment is always strict.
const CHECK_MODE = 'lenient';
const CHECK_PASS_PCT = 0;          // score needed on a module check to complete the module (0 = no pass gate). Retries are unlimited.
// What the review page shows. The right answer is NOT shown for questions answered wrong. Set check or final to true to show it.
const REVIEW_SHOWS_CORRECT_ANSWER = {check:false, final:false};
const LOCKOUT_CONTACT = {name:'Kayla Garcia, Senior Project Manager', email:'kayla.garcia@centific.com'};  // shown on the lockout screen. Leave email empty to show the name only; add a real name and email when confirmed

// Resources tab (moderator view). Add the real links here. See step 7 in the guide above.
// gate:'certified' keeps an item locked (not clickable) until the moderator has passed the final assessment. Keep it on the Atlas Tracker App entry.
const RESOURCES = [
  {group:'Tools', kind:'tool', title:'Atlas Tracker App', desc:'Your assignments, bookings and session logs.', url:'', gate:'certified'},
  {group:'Tools', kind:'link', title:'Request your ID badge and lanyard', desc:'Office form. Request it before your first home visit.', url:'https://forms.office.com/r/sMu2K8ivYw'},
  {group:'Documents', kind:'document', title:'Home Scanning SOP', desc:'The collection protocol: walks, conditions and quality standards.', url:''},
  {group:'Documents', kind:'document', title:'PT Communication Scripts', desc:'The booking scripts and the on-site script cards.', url:''},
  {group:'Documents', kind:'document', title:'Atlas Safety Protocol', desc:'The document you read, acknowledge and sign before fieldwork.', url:''},
  {group:'SharePoint', kind:'sharepoint', title:'Atlas Moderators SharePoint', desc:'Training videos and project files. Coming soon.', url:''},
  {group:'SharePoint', kind:'link', title:'Atlas Moderators Teams channel', desc:'Where you reach Kayla Garcia and the rest of the team.', url:''}
];

// ── CONTENT VERSION (bump this every time you change this file; same pattern as the app: v0.MINOR.PATCH.MMDDYY-content) ──
const CONTENT_VERSION = 'v0.3.5.102226-content';
