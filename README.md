## Live Site Link 

## Outline of my project

### File base Routing
     
     create a file in the pages folder\then see this section and added the localhost:3000/name.js 

     2nd : create a folder and create a file that name is index.js when we show it then setup the ( /foldername ) dilei index.js auto kaj hobe 

     example : localhost:3000/folder_name

      if ami index.js  bade onno kono file rakhi then  

      localhost:3000/folder_name/file_name

#### Dynamic Routing 
  * step:1 create  a folder that have index.js and [name].js 
  * step:2 use the useRouter hook and notice that function name is always uppercase lettter otherwise it gives us error 
  * step:3  const router =useRouter   const{name} =router.query 
  * finally show the output  foldername / number   example : localhost:3000/post/121


  #### Nested Dynamic Routing 

  * step 1 : create a folder name and create a file name index.js
  * step 2: create a dynamic routing folder name such as example is : [id]
  * step 3: inside the folder create a index.js file  and using the dynamic file structure top of the section 
  * step 4: if it is a nested dynamic routuong then i use the another [name].js file inside the [id] folder 
  * step 6: finally same as dynamic routing process 
  * example is : localhost:3000/foldername/anyname  = first dynamic name 
    example 2 is : loclahost:3000/foldername/anyname/anyname = see the 2nd routung name 

    #### Catch all Dynamic Router

   * using [...name]   = using the spread operator before the name that's why next detect that it is dynamic routing and if you use any / slas any word or any letter then it go to the same pages 

   #### Link in Nextjs

     * step 1: inport Link from nextjs 
     * step 2: create a <Link href="/page_name">  then close the Link Tag 

   #### Dynamic Link show using dynamiccally 

    * step 1: normally it is used in fetch data to show single items 
    * step 2: <Link href={`clints/${clint.id}/`}> use `` batic and ${}
      then push the id of inside it 

    * Show the dynamic link in Different Ways 
        
        <Link href={
          {
            pathname:'/filename/[dynamicfolder],
            query:{dynamic_file_name:clicnt.id}
          }
        }>

   



      
