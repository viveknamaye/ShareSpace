<br>
<p align="center">
<img src="./assets/screenshots/logo.svg">
<br>
<I>"Find your central perk in life"
</p>

<br>
<br>
<br>

![Design View](/assets/screenshots/designsview.png)

Solution for TSEC_HACKS_2023. A 24-hour offline hackathon organized by [TSEC_CODECELL](https://www.tseccodecell.com/).

Find the problem statement [here](/assets/PS.pdf).

---

### Table of Content

- [Our Approach](#our-approach)
- [Architecture](#architecture-diagram)
- [Designs](#screenshots)
- [Technologies used](#technologies-used)
- [Authors](#authors)

---

### Our Approach :

**Problem Statement as we understood it** -

There were 2 main requirements in the PS -

- Finding the perfect roommate match depending on user preferences and input
- Avoid Catfishing on the platform

**Solution** -

Entities in the system -

- User - who needs a roommate
- House - different houses available for rent
- House-owner - Owner of the apartment
- Group - group of people who are interested in the same room/apartment

#### 1. Finding the roommate match for the user -

- We take as input the following data from the user -

  - Is a drinker?
  - Is a smoker ?
  - occupation
  - age
  - gender
  - email
  - phone

- As this information is available for every user while searching for roommate we use this information to match the profiles.
- This matching can also be done by using ML algorithms. However, there is no need for ML in this case because we don't want similar profiles but exact preference matches.
- For this, we give filters to users while searching for rooms/roommates(just like when you shop on myntra or amazon) and we use these filter keywords to find the rooms

#### 2. Group system -

- This is a crucial component of the solution.
- We didn't want the to user to just scroll through the profile list of other users that share the same preference as him. As these users may or may not be actively looking for a roommate at the exact same time but they can be previous users.
- To tackle this problem we created groups. It is similar to WhatsApp groups. Here it is a group of people who are interested in the same flat/room present on the platform.
- The list of groups for a specific apartment is present on the room-profile page. So when any user finds a room that is suiting his style of living, he can see different groups that have a requirement for more members. For example, when the total accommodation of an apartment is 4 but only 2 members are currently present in the group.
- The user can then look at the members present in the group and their profiles. If the user profiles are matching his preferences then he can decide to make a request to join the group.
- Once approved by other members of the group he can join the group.
- Once the group is full, they can collectively apply for the room.

#### 3. Verification of User Data -

- This was the most challenging part. How to verify whether the data given by different users while registering on the platform is true or not. Because if the data is not correct then it will cause tons of problems.
- For example, If I as a user need a particular apartment. Let's assume that I am a smoker/drinker and I see that the room's other roommates are not allowing drinking/smoking in the residence. In this case, I can show myself as a non-drinker/non-smoker until I get the apartment.
- The verification of this is impossible just by the use of the software. So rather than checking whether the user is lying or not, we made sure that he will not want to lie. This means he won't get the apartment and face the consequences.
- We introduced one more entity - **"Room-owner"**. We left the job of verification to the room owner. That is one of the other roommates complained about the drinking/smoking behavior of the user. Then room-owner has the right to remove that user from the room. We include this right in the terms and conditions while applying for the room.
- Now, why will the room owner even go through this hassle after he got his money from all the room members? It's because he/she has some benefits from doing so.
- We are giving the owner contribution points and featuring him/her on our platform as a responsible and trustworthy party who is contributing to our platform (a wild example would be - a super liked profile on bumble, basically something different than normal profiles). So that the owner can get more customers in the future.

---

### Architecture Diagram :

![architecture](/assets/screenshots/architecture.svg)

---

### Designs :

**Landing Page**

![landing page](/assets/screenshots/landing.png)

**Authentication**

| ![phonelogin](/assets/screenshots/mobilenumber.jpg) | ![otpverification](/assets/screenshots/otpprofile.jpg) |
| --------------------------------------------------- | ------------------------------------------------------ |
| phone login                                         | otp verification                                       |

**Feed**

![feed](/assets/screenshots/feed.jpg)

**Room Profile**

![room profile](/assets/screenshots/roomprofile.jpg)

**Group Profile**

![group profile](/assets/screenshots/groupprofile.png)

**User Profile**

![User Profile](/assets//screenshots/userprofile.jpg)

---

### Technologies Used :

- ReactJs
- Tailwind
- Firebase
- Figma
- Excalidraw

### Authors :

- Akshay Kanade
  - [Portfolio](https://www.akshaykanade.me/) | [Twitter](https://twitter.com/kanadeakshay20) | [GitHub](https://github.com/kanadeakshay)
- Pranav Dani
  - [Portfolio](https://pranavdani.me/) | [Twitter](https://twitter.com/PranavDani3) | [GitHub](https://github.com/PranavDani)
- Shreesh Srivastava
  - [Linkedin](https://www.linkedin.com/in/shreesh-srivastava/) | [Twitter](https://twitter.com/ShreeshSrivast8) | [GitHub](https://github.com/Neo945)
- Vivek Namaye
  - [Linkedin](https://www.linkedin.com/in/viveknamaye/) | [Twitter](https://twitter.com/VivekNamaye) | [GitHub](https://github.com/viveknamaye)
