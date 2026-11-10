# Dating App UI Kit

A comprehensive dating mobile application based on Sketch (`dating-app-ui-kit-artem-osyadliy.sketch`). Built strictly with **pure JavaScript & JSX (`.js`, `.jsx`)**, React Native 0.88, Expo SDK 58, and Expo Router.

---

## Core Features & Design Mechanics

1. **Credits Currency System (1 Credit = $0.99 USD)**:
   - Users earn credits when other singles unlock their direct contact number.
   - Half of the purchase credits are credited directly to the profile owner's balance.

2. **Top - Users Spotlight**:
   - Buy a spot in the "Top" users bar for 24 hours to gain 10x more profile visits.

3. **Discovery & Swiping Deck (`src/app/(tabs)/index.jsx`)**:
   - Full-card profile view with photos, compatibility match score, distance, bio, and passion badges.
   - 5 interactive action buttons: Rewind, Nope, Super Like, Like, and Boost.
   - Instant "It's a Match!" celebration modal.

4. **Matches & Secret Likes (`src/app/(tabs)/matches.jsx`)**:
   - Segmented control across *Matches*, *Secret Likes*, and *Profile Views*.
   - VIP gold upgrade teaser to reveal secret admirers.

5. **Conversations & Messaging (`src/app/(tabs)/chats.jsx` & `src/app/chat-detail.jsx`)**:
   - Unread badges and live online presence indicators.
   - Icebreaker questions to spark authentic conversations.
   - Photo attachments and voice note controls.

6. **Profile Customization & Discovery Filters**:
   - Age range (`20 - 23`), maximum distance, interests filter modal.
   - Full photo manager and credit rate settings.

---

## Technical Verification

- **Pure JS & JSX**: 0 TypeScript (`.ts`/`.tsx`) files.
- **Expo Router 58**: Clean routing with tabs and modals.
- **AST Validated**: Babel AST parser checked with 0 errors across all code.

<!-- run-locally:start -->

## ▶️ Run locally

```bash
npm install
npx expo start
```

Then press `i` for the iOS simulator, `a` for Android, or `w` for the web, or scan the QR code with Expo Go.

<!-- run-locally:end -->

---

<!-- design-credits:start -->

## 🎨 Design Credits

This app is based on the free **Mobile Dating App** design by **Artem Osyadliy**, downloaded from Sketch App Sources. All visual design credit goes to the designer. It follows the design's screens, user flows and content; visual details (exact spacing, fonts, some colours and illustrations) are approximated and may differ from the original.

| | |
|---|---|
| Designer | [Artem Osyadliy](https://www.sketchappsources.com/contributor/artemosyadliy ) |
| Original design | [Mobile Dating App](https://www.instagram.com/artem.osyadliy/) |
| Downloaded from | [Sketch App Sources](https://www.sketchappsources.com/free-source/4831-complete-dating-mobile-app-design-sketch-freebie-resource.html) |
| Dribbble | <http://www.dribbble.com/jetup> |
| Website | <https://www.behance.net/artosyad> |
| Original file | `dating-app-ui-kit-artem-osyadliy.sketch` |
| License / usage | Not stated on the source page. Free download; credit the designer (Sketch App Sources Terms) and confirm with them before commercial use. |

**Attribution:**

> UI design: "Mobile Dating App" by Artem Osyadliy (https://www.instagram.com/artem.osyadliy/), downloaded from Sketch App Sources (https://www.sketchappsources.com/free-source/4831-complete-dating-mobile-app-design-sketch-freebie-resource.html).

The original design source files are not included in this repository; get them from the links above. This app's **code** is released under the [MIT License](./LICENSE); the visual design remains the designer's (see [NOTICE](./NOTICE)).

Photos, brand logos and avatars inside the design may belong to third parties and are not covered by the designer's permission.

<!-- design-credits:end -->
