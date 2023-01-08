<template>
   <header>
    <div class="absolute top-0 left-0 z-40 flex items-center w-full ud-header bg-black">
        <div class="container">
            <div class="relative flex items-center justify-between -mx-4">
                <router-link :to="{name:'Home'}" class="max-w-full px-4 w-80 flex items-center">
              
                    <div class="w-1/5 py-5">
                        <img src="../assets/images/logo/logo.png" alt="logo" class="w-full header-logo" />
                    </div>
               <h1 class="ml-4 text-3xl font-bold text-white hidden lg:inline">Yene Blogs</h1>
                </router-link>
            
                <div class="flex items-center justify-end w-full px-4">
                    <div>
                        <button id="navbarToggler"
                            class="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden">
                            <span class="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                            <span class="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                            <span class="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                        </button>
                        <nav id="navbarCollapse"
                            class="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:py-0 lg:px-4 lg:shadow-none xl:px-6">
                            <ul class="blcok lg:flex">
                               
                                <li class="relative group">
                                    <router-link :to="{name:'Home'}" class="flex py-2 mx-8 text-base ud-menu-scroll text-dark group-hover:text-primary lg:mr-0 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70">
                                    
                                        Home
                                    
                                    </router-link>
                                </li>
                               
                                <li class="relative group">
                                    <router-link :to="{name:'Blogs'}"
                                        class="flex py-2 mx-8 text-base ud-menu-scroll text-dark group-hover:text-primary lg:mr-0 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70">
                                    
                                        Blogs
                                    
                                    </router-link>
                                </li>
                            <li class="relative group">
                                <a href="#about"
                                    class="flex py-2 mx-8 text-base ud-menu-scroll text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12">
                                    create Post
                                </a>
                            </li>
                               
                                <li class="relative group">
                                    <router-link to="/about"
                                        class="flex py-2 mx-8 text-base ud-menu-scroll text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12">
                                        About
                                </router-link>
                                </li>
                            
                            </ul>
                        </nav>
                    </div>
                    <div class="justify-end hidden pr-16 sm:flex lg:pr-0">
                        
                        <a href="signup.html"
                            class="px-6 py-3 text-base font-medium text-white duration-300 ease-in-out bg-white rounded-lg signUpBtn bg-opacity-20 hover:bg-opacity-100 hover:text-dark">
                            Login / Register
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- ====== Navbar Section End -->
    </header>
    
</template>


<script>
export default {};
</script>


<style>
a.router-link-active {
    color: #a4b3c1;
   

}
</style>