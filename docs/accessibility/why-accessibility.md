---
title: Why Accessibility Matters
slug: /accessibility
---

## accessible

[ ak-ses-uh-buh l ] : easy to approach, reach, enter, speak with, or use.
: that can be used, entered, reached, etc. src: dictionary.com

## What do you understand by accessibility?

One of the simple questions that opens up this topic while discussing or interviewing developers and designers — be it web or mobile.

The “front end” web development world transitioned from the yesteryears of being a mere HTML, CSS and Form validation world of cosmetic developers to today — where a major chunk of the heavy-lifting is done by the same set of developers. With React, Angular, Node, Svelt, Vue and similar JS frameworks of the world — the advancement and complexity for developers have reached a completely new level. We have come full circle — where we moved from being Jack of all trades or so-called polyglots or full-stack to Specialists, to now going back to full cycle development again, where unless you are aware of managing all NFRs and DevOps and Cloud, you are considered a minimalist.

For most organizations that have a web/mobile presence today, accessibility is a mandate by law and has a clear mention in the “Statement Of Work” (SoW) that development firms sign up for. Yet, when hiring developers, this continues to be a nice-to-have skill.

So what makes Accessibility such a rare/underrated topic for developers?
It starts with complete unawareness and ignorance on part of both — the clients and the developers.

There are quite a few books and reading materials available on HOW to IMPLEMENT accessibility, but not much on HOW to THINK about accessibility. So in a way, you start developing with an accessible-first mindset, and not make it an afterthought.

## My Inspiration

During my school days, Poliomyelitis had left one of my classmates in braces and wheelchair. Growing up, through the years, it was amazing to see him move around with the same level of confidence as anyone of us. However, what was equally, if not more annoying and disappointing, was to see the lack of infrastructure to assist and enable him to do that with relative ease. We didn’t have ramps or elevators as an alternative to stairs.

Moving to college, I used to write exams for my seniors who had partially impaired or no vision at all. It was fascinating to see them use their auditory and touch senses to learn and work through their daily chores. I had the desire to make the world easier, fair and more accessible for them.

I soon started my career as a frontend technologist — known by many names like “Web developer, site developer, interactive developer” — and now, as my current org calls us, Experience Technologist. Once, I had sent out an organization-wide “Only Image” invite emailer for one of the internal events, and got an instant reply (fig 1.1 below)… It pointed out how, subconsciously, I had completely ignored ensuring that the emailer was ‘accessible’ for all that would be receiving it.

![EMAIL RESPONSE RECEIVED FOR AN IMAGE-ONLY EMAILER CALLING OUT THAT THE SENDER COULDN’T READ ITS CONTENT](https://miro.medium.com/max/700/0*tzbTkZykc2wI8-yz.png)

This email was a good reminder of how we end up taking this mandatory step as a nice-to-have. It got me started on this journey of creating awareness on accessibility for the business, designers and developers alike.

## What is accessibility and what it is not

It’s almost tragic that designers and developers even today confuse “accessibility” with “usability”, and it continues to be just a checklist of compliance boxes that they need to tick off.

Accessibility is not just about code or about extending reach to one additional set of audiences, but also about ensuring that the same information is available to anyone who wants to access it. This in real-life is not limited to the web, but in everything we interact with. Simple measures like providing ramps along with stairs, braille buttons in elevators, keyboard and voice-enabled alternatives for web access go a long way in creating an environment of inclusiveness.

![BRAILLE-ENABLED ELEVATOR BUTTONS. SRC: SHUTTERSTOCK](https://miro.medium.com/max/390/0*Vgc11se41hGNGac1.jpg)

## It’s not just about the code…

I will cover some points on how to think accessibility first while developing web applications, some of the most commonly-developed components/modules, and how to get them right.

Writing accessible-compliant code is one of the important pieces of getting this right. It is critical for developers to know what and how to code, keeping accessibility in mind. However, it is not the first or the only step. The journey of having a compliant web app/site can be categorized into three primary buckets: Design (aesthetics and behavior), Code and Content.

As we move ahead from here to detail the stages and steps involved, I shall try and leverage my web and mobile development/implementation experience to elaborate on the stages. Let’s get going…

## Step 1: Design

The journey to an accessible-compliant web gets triggered right at the design stage. Since this serves as the base of how elements would be placed, its flow and sequence of how it is accessed. It also determines the interactions these elements have with the end user and its behavior on interaction; hence it’s key to get the designs tested.

1. Grouping elements logically, so they appear related as well, and are not just connected through code, where needed. This would also help people with visual impairment who browse, zoomed in. It also helps keyboard users as they can see the focus logically traverse through the page.

2. Defining relevant section titles clearly calls out to the screen reader users, what the section is for. Having a consistent look and feel, be it font sizes or colors, also goes a long way in driving consistent behavior from the users. We shall talk about how to semantically code this, in the upcoming blogs.

3. It’s important to talk about how certain components would appear and behave upfront. One of the commonly used modules is a carousel. There are a lot of variations of it that appear on different apps. From the ones where you can bring one element in focus at a time, to sliding complete sets, to the ones with previous and next buttons appearing as an overlay to having pagination-enabled ones. It’s key to have any of the above variations that have proper keyboard access implemented. What one should for sure avoid, is implementing circular or infinite scrolling carousels so people accessing this, only using the keyboard, have a way to step out of the carousel, as and when needed. There has to be thought given to the responsive behavior of carousels too, so screen readers are able to read all relevant information at all times.

4. For autoscroll content, video, audio segments, it’s important to provide controls like stop, start, so users can control its behavior.

5. Color contrast is one of the more known and talked about parts when designing for accessibility is discussed. WCAG guidelines have detailed documentation, from the font size to background/foreground color ratios.

6. Talking about colors, it is critical to ensure that messages (eg: errors) aren’t conveyed by colors alone. This becomes important for color-blind users. This, I can say with personal experience, since I am a color-blind user.

7. All actionable objects on the page, be it anchors, buttons, dropdown, etc. need to have consistent color patterns for positive (Submit, Add To Cart) and negative (Cancel, Reset, Delete) actions.

![](https://miro.medium.com/max/699/0*I8rnR2z5hM9wNYbZ)

Sample carousel with previous next buttons, play control for video content and pagination.

While all the above are best practices, it is easy to relate to the reasoning of each. As long as we start with thinking of different users accessing this, and their behaviors thereby, we would have started on our journey for an accessible-first approach.

That is all for this first blog of the series. I shall continue elaborating on some of the best practices, concepts around THINKING and DEVELOPING with an ACCESSIBILITY-first mindset.
