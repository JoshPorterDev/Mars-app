<template>
  <nav class="Navbar">
      <input type="checkbox" id="check">
      <label for="check" class="checkbtn">
          <i class="fas fa-bars"></i>
      </label>
      <label class="logo">Mars Rover</label>
      <ul id="ul">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/rovers">Rovers</router-link></li>
          <li><router-link to="/latest_photo">Latest Photo</router-link></li>
      </ul>
  </nav>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style>
    * {
        padding: 0;
        margin: 0;
        text-decoration: none;
        list-style: none;
        box-sizing: border-box;
    }
    .Navbar {
        background: #993333;
        height: 100px;
        width: 100%;
    }

    label.logo {
        color: white;
        font-size: 35px;
        line-height: 100px;
        padding: 0 100px;
        font-weight: bold;
    }

    nav ul {
        float: right;
        margin-right: auto;
    }

    nav ul li {
        display: inline-block;
        line-height: 100px;
        margin: 0 5px;
    }

    nav ul li a {
        color: white;
        font-size: 17px;
        padding: 7px 13px;
        border-radius: 4px;
        text-transform: uppercase;
    }

    a.active,a:hover {
        background: #993333;
        transition: .5s;
    }

    .checkbtn {
        font-size: 30px;
        color: white;
        float: right;
        line-height: 100px;
        margin-right: 40px;
        /* margin-left: 40px; */
        cursor: pointer;
        display: none;
    }

    #check {
        display: none;
    }

    @media (max-width: 952px)
    {
        label.logo {
            font-size: 30px;
            padding-left: 50px;
        }

        nav ul li a {
            font-size: 16px;
        }
    }

    @media (max-width: 858px)
    {
        .checkbtn {
            display: block;
        }

        ul {
            position: fixed;
            width: 100%;
            height: 100vh;
            background: #2c3e50;
            top: 100px;
            left: -100%;
            text-align: center;
            transition: all .5s;

        }

        nav ul li {
            display: block;
            margin: 50px 0;
            line-height: 30px;
        }

        nav ul li a {
            font-size: 20px;
        }

        a:hover,a.active {
            background: none;
            color: #993333;
        }

        #check:checked ~ ul {
            left: 0;
        }
    }
</style>