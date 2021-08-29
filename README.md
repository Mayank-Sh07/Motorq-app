# Course++

## How to use

###Simply clone the repository, create a .env.local at root
in the given format:

- NEXT_PUBLIC_SUPABASE_KEY="" // Add key here from https://supabase.io/
- NEXT_PUBLIC_GOOGLE_MAP_KEY="" // Google Map API key

## Pros
- Use for TypeScript for better more type safe APIs.
- Endpoints become serverless Lambda function so less interdependancy.
- NO CORS policy, so API transctions are restricted to the domain.
- I have implemented Authentication.
- Search and Autosuggest for course search.
- Time table has month, week and day view. 
- All APIs built as per requirement
- Use of caching through [SWR]: https://swr.vercel.app/

Link to youtube video of project description: 
https://youtu.be/j4hyxWCmGZ8

> DBMS Modelling using [dbdiagram]: https://dbdiagram.io/d
![Capture](https://user-images.githubusercontent.com/52369953/131245885-a89bef23-c360-4678-ba43-1bbd29899a85.PNG)

> Integration testing of API endpoints using [Insomnia]: https://insomnia.rest/
![image](https://user-images.githubusercontent.com/52369953/131246033-ca652a10-2c6d-43e2-9e09-535b2f4ce74d.png)

![image](https://user-images.githubusercontent.com/52369953/131246040-7c5b703a-6be2-4a35-8e34-228d4f6fe35a.png)


## Shortcomings
- I took some time to understand the problem statement and requirements. I wanted to be sure of what I was doing but I feel more quick prototyping and iterations would have benefitted me.
- Focus on User experience, I have an inclination to make websites intuitive and aesthetically pleasing, although for this task I should have kept that aside.


## Improvements & further development
- I would definately work on the Map endpoint! I have experience using Google Maps API so I pushed it to the end, Alas! bugs crept up.
- Looking more into API security and data manipualtion while responding to requests.

