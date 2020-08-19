## 🚀 FG Office Wall

A quick mashup between airtable an Gatsby to try and create a lightweight virtual version of our office wall where we share pictures and interesting facts about each other.

Keep in mind the first iteration of this has been built by one of the mangement team - not a designer or developer. Ha! go easy.

### TO do

1. Update SEO and explore a simple password
2. Add link (twitter / maybe slack?)

## to run locally

1. Clone the repo and change into the directory via terminal

```shell
git clone <giturl>
cd <folder>
```

2. Make sure you've for acess to the Airtable base 'Virtual FG Office Wall' and create a '.env' file in the root with AIRTABLE_API_KEY set to the key given in the airtable account.

```shell
AIRTABLE_API_KEY=<xxxxxxxxxx>
```

3. Install project files / dependancies

```shell
npm install
```

4. Run gatsby development environment (localhost:8000)

```shell
gatsby develop
```

5. Grab a cold one and enjoy!
