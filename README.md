# SND
Crafted UI sound assets for UX developers.

## Description
With the spread of smart speakers and wireless earphones, the importance of sound in interaction design is increasing day by day. However, compared to many researches and practices in the fields of visual design and animation in interaction design, it seems that not enough knowledge has been shared about interaction design with sound, except in some fields such as games.

Interaction should not be limited to text and visuals, but should be richer than that. In order to make the intensity of interaction richer and stronger, we should have more discussion about sound.

However, in the area of interaction design, there are fewer sound designers than visual designers and programmers, and there are certainly barriers to creating sound.

To encourage UX developers to further explore discussions in the area of interaction design with sound, we have developed UI sound assets that can be used for free without worrying about licensing.

UI sound assets, developed in collaboration with multiple sound designers, are designed to fit the components used in many modern UIs. Each asset is individually designed with a different concept, so you can feel the change in texture and tone by switching the sounds.

We hope that you will use it as a resource to further refine the quality of UX for your apps, services, and products under development, and that it will help you to explore the field of sound design.

All UI sounds published on "SND" can be used for free, regardless of whether they are commercial or non-commercial. Therefore, you can use them not only for prototyping, but also for implementation in your services. *Please check the terms of use for details.

<br/><br/>

## Website

- [snd.dev](https://snd.dev)
<br/><br/>

## Demo

- [Demo for JavaScript Developer](https://codepen.io/snd-lib/pen/bGYdjqy)
- [Demo for HTML/CSS Developer](https://codepen.io/snd-lib/pen/KKypBgK)
<br/><br/>

## Install
#### npm
```sh
$ npm install snd-lib
```

#### CDN
```html
<script src="https://cdn.jsdelivr.net/gh/snd-lib/snd-lib@v1.1.2/dist/browser/snd.js?kit=01"></script>
```

## Usage
node
```javascript
import Snd from 'snd-lib';

const snd = new Snd();

// Get all anchor elements.
const links = document.getElementsByTagName('a');

// Event handler for click
const onClick = (e) => {
	snd.play(Snd.SOUNDS.TAP);
}

// Load audio file
snd.load(Snd.KITS.SND01).then(() => {
	// Listen click event of all anchor elements.
	for (let i=0; i<links.length; i++) {
		links[i].addEventListener('click', onClick)
	}
})
```

HTML
```html
<html>
	<head>
		<!-- Load JavaScript file from CDN -->
		<script src="https://cdn.jsdelivr.net/gh/snd-lib/snd-lib@v1.1.2/dist/browser/snd.js?kit=01"></script>
	</head>
	<body>
		<!-- Play Button sound on click -->
		<a href="https://github.com/" class="snd__button">Link</a>
		<!-- Play Type sound on keydown -->
		<input type="text" class="snd__type" />
		<!-- Play Celebration sound on click -->
		<input type="submit" class="snd__celebration" value="Submit" />
	</body>
</html>
```

## API
### Snd Class (extends EventEmitter)


#### note
- You need to initialize Web Audio API from pointer event at first.
- This library adds a click event listener to window to initialize Audio Context.
- By setting the [preloadSoundKit](#snd_option) option to null when create an instance and call the [load](#load) method manually, you can wait for the sound kit to load

### **constructor**
```javascript
new Snd(options: SndOptions);
```
<h4 id="snd_option"></h4>

#### SndOptions
| name | type | default | description |
| ---------------- | ------- | ------- | ------------------------------------- |
| easySetup | boolean | true | If this option is set to true, Snd will automatically add event listeners to the HTML Elements with "snd__[sound key]" classes.  |
| muteOnWindowBlur | boolean | true | If this option is set to true, Snd will fade out the audio volume when browser or browser's tab becomes inactive. |
| preloadSoundKit | null \| string  | null | Sound Kit key to pre load. |

#### PlayOptions
| name | type| default | description |
| ---------------- | --------------------- | ------- | ------------------------------------- |
| loop | boolean | false | whether loop or not |
| volume | number | 1 | Audio volume |
| delay | number | 0 | Delay time (second) |
| duration | number | -1 | Playing duration (second). If this is set to -1 the playing duration will be the original sound duration. |
| callback | (id: number) => void | () => {} | Callback function that will be called when the sound complete playing. |

<br/><br/>

### **static properties**
<br/><br/>

#### CHANGE_SOUND_KIT: string static readonly

Event name which will be triggered when a sound kit has changed
<br/><br/>

<h4 id="sounds"></h4>  <!-- for inline link -->

#### SOUNDS: {[key: string]: string} static readonly

An object that contains all keys of the sound types. (ex: "Button", "Tap")
<br/><br/>

<h4 id="kits"></h4>  <!-- for inline link -->

#### KITS: {[key: string]: string} static readonly

An object that contains all keys of sound kits.
<br/><br/><br/>

#### masterVolume: number static

master volume
<br/><br/>

### **methods**
<br/><br/>

<h4 id="load"></h4>  <!-- for inline link -->

#### load(kitKey: string): Promise<SoundKit>

Load sound kit

|arg|type|description|
|-|-|-|
|kitKey|string | Key of the sound kit. You can pass the value using [Snd.KITS](#kits) object. |
<br/>

<h4 id="play"></h4>  <!-- for inline link -->

#### play(soundKey: string, options?: PlayOptions): void

Play sound

|arg|type|description|
|-|-|-|
|soundKey|string | Key of the sound. You can pass the value using [Snd.SOUNDS](#sounds) object. |
|options|PlayOptions| |
<br /><br />

#### playTap(options?: PlayOptions): void

Play Tap sound
<br /><br />

#### playSwipe(options?: PlayOptions): void

Play Swipe sound
<br /><br />

#### playType(options?: PlayOptions): void

Play Type sound
<br /><br />

#### playButton(options?: PlayOptions): void

 Play Button sound
<br /><br />

#### playCaution(options?: PlayOptions): void

 Play Caution sound
<br /><br />

#### playCelebration(options?: PlayOptions): void

 Play Celebration sound
<br /><br />

#### playDisabled(options?: PlayOptions): void

 Play Disabled sound
<br /><br />

#### playNotification(options?: PlayOptions): void

 Play Notification sound
<br /><br />

#### playProgressLoop(options?: PlayOptions): void

 Play ProgressLoop sound
<br /><br />

#### playRingtoneLoop(options?: PlayOptions): void

 Play RingtoneLoop sound
<br /><br />

#### playSelect(options?: PlayOptions): void

 Play Select sound
<br /><br />

#### playTransitionUp(options?: PlayOptions): void

 Play TransitionUp sound
<br /><br />

#### playTransitionDown(options?: PlayOptions): void

 Play TransitionDown sound
<br /><br />

#### playToggleOn(options?: PlayOptions): void

 Play ToggleOn sound
<br /><br />

#### playToggleOff(options?: PlayOptions): void

 Play ToggleOff sound
<br /><br />

<h4 id="stop"></h4>  <!-- for inline link -->

#### stop(soundKey: string): void

Stop all sounds with a specific sound key.

|arg|type|description|
|-|-|-|
|soundKey|string | Key of sound. You can pass the value using [Snd.SOUNDS](#sounds) object. |
<br/>

#### mute(): void

Mute
<br/><br/>

#### unmute(): void

Unmute
<br/><br/>

<br/>

### **properties**
<br/><br/>

#### kit: string

Currently selected sound kit key.
<br/><br/>

#### isMuted: boolean

Muted or not.
<br/><br/>

#### isWindowBlurred: boolean

Browser window is blurred or not.
<br/><br/>

### **Events**

#### CHANGE_SOUND_KIT

Triggered when the sound kit has change.
<br/><br/>

### **Sounds**

#### Sound Kit
| name | key | author |
| ---------------- | --- |----------------- |
| SND01 "sine" | 01 | Yasuhiro Tsuchiya |
| SND02 "piano" | 02 | Ayako Taniguchi |
| SND03 "industrial" | 03 | INDUSTRIAL JP |

#### key

Sound key is required to call [play()](#play) and [stop()](#stop) method.
<br/><br/>

```javascript
import Snd from "snd-lib";
Snd.SOUNDS
```
| name             | description            |
| ---------------- | ----------------- |
| button | Unlike Tap sound, this sound is played to clearly indicate to the user that they have pressed a UI element that performs a specific function, such as a button. In combination with visual effects, it can provide the user the feeling that they have definitely pressed a specific button. |
| caution | A caution sound. This sound is played to indicate to the user that something is wrong, has a slightly more negative sound than Notification. |
| celebration | This is a sound to celebrate the moment when user have achieved the biggest goal of each application. For example, when user send an email in an email app, or when user has checked the last task in a task management app. It creates a climax in the app's UX. |
| disabled | This sound is played when you press a disabled button. The sound is not as strong as the Caution sound described below. The sound is simply to indicate that the button itself is invalid. |
| notification | Notification sound. This sound is played to alert the user when there is some kind of notification from the app. |
| progress_loop | This sound is played to clearly indicate that some task is being processed, such as loading, dragging, etc. It is designed to be played in a loop while the task is running. After the task is completed, it is a nice to play a sound to indicate that the work has been completed according to the type of task. However, if the processing time is expected to be very long, or if the processing occurs frequently, the sound will be played all the time, so consider carefully which task to assign the sound to. |
| ringtone_loop | This is the sound with the highest level of alert compared to Notification and Caution. It is designed to be played in a loop until the user takes action. It is intended to be used as a ringing sound or alarm sound. |
| select | This sound is played when a specific UI element is selected such as a checkbox, radio button, choice chip, or input form. In combination with visual effects, it can be used to create a responsive feeling to the user that they have definitely selected a specific element. |
| swipe | This sound is played when a user swipes or presses the pager button to make a horizontal-transition. Since program would play the sound frequently, we have prepared five different sounds with the same tone but slightly different sound. By randomly playing these sound for each user action, it enables interface to reduce the discomfort of hearing the same sound repeatedly. |
| tap | This sound is played to indicate to the user that the program recognized the user's action such as tapping or clicking on the screen.Since program would play the sound frequently, we have prepared five different sounds with the same tone but slightly different sound. By randomly playing these sound for each user action, it enables interface to reduce the discomfort of hearing the same sound repeatedly.This sound is only for the purpose of making the user "feel responsive". For UI elements that have certain functions assigned such as buttons, be sure to assign appropriate sound from the following sound assets. |
| toggle_on / toggle_off | This sound is played when a UI that clearly indicates two states, "ON" and "OFF", such as a toggle switch, is activated. The sound is designed to correspond to the ON and OFF states, from low to high when it is ON, and from high to low when it is OFF. By properly assigning the ON and OFF sounds, it enables users to clearly notice the toggle switch has enabled or disabled some function. |
| transition_down / transition_up | Unlike Swipe sound which is for horizontal-transition within the same hierarchy, this is a sound is played when a hierarchical-transition is made by a modal window, etc., As with Toggle sounds, there are OPEN and CLOSE sounds. By assigning them appropriately to modal opening and closing, hierarchical transitions can be notified to the user properly. |
| type | This sound is played to provide feedback to the user when typing text. For the sound to be played repeatedly during keystrokes, we have prepared five different sounds with the same tone but slightly different. By randomly playing these sound for each user input, it enables to reduce the discomfort of hearing the same sound repeatedly. |

#### HTML Class names for easy setup.
- If the [easySetup](#snd_option) option is set to true, Snd will automatically play sound for HTML Elements with classes below.

| name | compatible elements | event |
| ---------- | -------- | ---------- |
| snd__button| any | click |
| snd__caution | any | click |
| snd__celebration | any | click |
| snd__disabled | any | click |
| snd__notification| any | click |
| snd__select| select, input(type="radio") | change |
| snd__tap | any | mousedown, touchstart |
| snd__toggle| input(type="checkbox") | change |
| snd__transition_down | any | click |
| snd__transition_up | any | click |
| snd__type| textarea, input(type="text,email,number,password,search,tel,url") | keydown |


## License
The source code is licensed under the terms of the MIT license.
The audio materials included may be used free of charge, but the copyright and all other intellectual property rights of the audio files belong to the credited sound designer (author).  See https://snd.dev/ for the details.

## Contact
Dentsu Customer Experience Creative Center conducts research and development on sound for better user experience, please feel free to contact us for UI sound development requests, consultations on sound-related projects, requests for lectures, and requests for interviews.

[snd-contact@dentsu.co.jp](mailto:snd-contact@dentsu.co.jp)

## Author
DENTSU INC.
STARRYWORKS inc.
