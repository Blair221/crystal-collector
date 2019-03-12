$(function() {
  var wins = 0;
  var losses = 0;
  var currentTotal = 0;
  var randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
  var amethystValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
  var rubyValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
  var topazValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
  var sapphireValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
  if (
    amethystValue === rubyValue ||
    amethystValue === topazValue ||
    amethystValue === sapphireValue ||
    rubyValue === topazValue ||
    rubyValue === sapphireValue ||
    topazValue === sapphireValue
  ) {
    amethystValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    rubyValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    topazValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    sapphireValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
  }
  console.log(randomNumber);

  $("#start-button").on("click", function() {
    $("#start-button").remove();
    $("#directions")
      .fadeIn(1000)
      .html(
        "Figure out how much each crystal is worth, can you hit the target score?"
      );
    $("#amethyst").on("click", function() {
      
      currentTotal += amethystValue;
      $("#total").html("<h6>Current Total: </h6>" + currentTotal);
      console.log(currentTotal);
      if (currentTotal === randomNumber) {
        wins++;
        $("#wins").html("<h6>Wins: </h6>" + wins);
        currentTotal = 0;
        $("#total").html("<h6>Current Total: </h6>" + currentTotal);
        randomNumber = Math.floor(Math.random() * 121) + 19;
        $("#random-number").html("<h6>Number: </h6>" + randomNumber);
        amethystValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        rubyValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        topazValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        sapphireValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        if (
          amethystValue === rubyValue ||
          amethystValue === topazValue ||
          amethystValue === sapphireValue ||
          rubyValue === topazValue ||
          rubyValue === sapphireValue ||
          topazValue === sapphireValue
        ) {
          amethystValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
          rubyValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
          topazValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
          sapphireValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        }
      } else if (currentTotal >= randomNumber) {
        losses++;
        $("#losses").html("<h6>Losses: </h6>" + losses);
        currentTotal = 0;
        $("#total").html("<h6>Current Total: </h6>" + currentTotal);
        randomNumber = Math.floor(Math.random() * 121) + 19;
        $("#random-number").html("<h6>Number: </h6>" + randomNumber);
        amethystValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        rubyValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        topazValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        sapphireValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        if (
          amethystValue === rubyValue ||
          amethystValue === topazValue ||
          amethystValue === sapphireValue ||
          rubyValue === topazValue ||
          rubyValue === sapphireValue ||
          topazValue === sapphireValue
        ) {
          amethystValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
          rubyValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
          topazValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
          sapphireValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        }
      }
    });

    $("#ruby").on("click", function() {
      
      currentTotal += rubyValue;
      $("#total").html("<h6>Current Total: </h6>" + currentTotal);
      console.log(currentTotal);
      if (currentTotal === randomNumber) {
        wins++;
        $("#wins").html("<h6>Wins: </h6>" + wins);
        currentTotal = 0;
        $("#total").html("<h6>Current Total: </h6>" + currentTotal);
        randomNumber = Math.floor(Math.random() * 121) + 19;
        $("#random-number").html("<h6>Number: </h6>" + randomNumber);
        amethystValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        rubyValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        topazValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        sapphireValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        if (
          amethystValue === rubyValue ||
          amethystValue === topazValue ||
          amethystValue === sapphireValue ||
          rubyValue === topazValue ||
          rubyValue === sapphireValue ||
          topazValue === sapphireValue
        ) {
          amethystValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
          rubyValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
          topazValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
          sapphireValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        }
      } else if (currentTotal >= randomNumber) {
        losses++;
        $("#losses").html("<h6>Losses: </h6>" + losses);
        currentTotal = 0;
        $("#total").html("<h6>Current Total: </h6>" + currentTotal);
        randomNumber = Math.floor(Math.random() * 121) + 19;
        $("#random-number").html("<h6>Number: </h6>" + randomNumber);
        amethystValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        rubyValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        topazValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        sapphireValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        if (
          amethystValue === rubyValue ||
          amethystValue === topazValue ||
          amethystValue === sapphireValue ||
          rubyValue === topazValue ||
          rubyValue === sapphireValue ||
          topazValue === sapphireValue
        ) {
          amethystValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
          rubyValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
          topazValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
          sapphireValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        }
      }
    });

    $("#sapphire").on("click", function() {
      
      currentTotal += sapphireValue;
      $("#total").html("<h6>Current Total: </h6>" + currentTotal);
      console.log(currentTotal);
      if (currentTotal === randomNumber) {
        wins++;
        $("#wins").html("<h6>Wins: </h6>" + wins);
        currentTotal = 0;
        $("#total").html("<h6>Current Total: </h6>" + currentTotal);
        randomNumber = Math.floor(Math.random() * 121) + 19;
        $("#random-number").html("<h6>Number: </h6>" + randomNumber);
        amethystValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        rubyValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        topazValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        sapphireValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        if (
          amethystValue === rubyValue ||
          amethystValue === topazValue ||
          amethystValue === sapphireValue ||
          rubyValue === topazValue ||
          rubyValue === sapphireValue ||
          topazValue === sapphireValue
        ) {
          amethystValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
          rubyValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
          topazValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
          sapphireValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        }
      } else if (currentTotal >= randomNumber) {
        losses++;
        $("#losses").html("<h6>Losses: </h6>" + losses);
        currentTotal = 0;
        $("#total").html("<h6>Current Total: </h6>" + currentTotal);
        randomNumber = Math.floor(Math.random() * 121) + 19;
        $("#random-number").html("<h6>Number: </h6>" + randomNumber);
        amethystValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        rubyValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        topazValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        sapphireValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        if (
          amethystValue === rubyValue ||
          amethystValue === topazValue ||
          amethystValue === sapphireValue ||
          rubyValue === topazValue ||
          rubyValue === sapphireValue ||
          topazValue === sapphireValue
        ) {
          amethystValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
          rubyValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
          topazValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
          sapphireValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        }
      }
    });

    $("#topaz").on("click", function() {
      
      currentTotal += topazValue;
      $("#total").html("<h6>Current Total: </h6>" + currentTotal);
      console.log(currentTotal);
      if (currentTotal === randomNumber) {
        wins++;
        $("#wins").html("<h6>Wins: </h6>" + wins);
        currentTotal = 0;
        $("#total").html("<h6>Current Total: </h6>" + currentTotal);
        randomNumber = Math.floor(Math.random() * 121) + 19;
        $("#random-number").html("<h6>Number: </h6>" + randomNumber);
        amethystValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        rubyValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        topazValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        sapphireValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        if (
          amethystValue === rubyValue ||
          amethystValue === topazValue ||
          amethystValue === sapphireValue ||
          rubyValue === topazValue ||
          rubyValue === sapphireValue ||
          topazValue === sapphireValue
        ) {
          amethystValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
          rubyValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
          topazValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
          sapphireValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        }
      } else if (currentTotal >= randomNumber) {
        losses++;
        $("#losses").html("<h6>Losses: </h6>" + losses);
        currentTotal = 0;
        $("#total").html("<h6>Current Total: </h6>" + currentTotal);
        randomNumber = Math.floor(Math.random() * 121) + 19;
        $("#random-number").html("<h6>Number: </h6>" + randomNumber);
        amethystValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        rubyValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        topazValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        sapphireValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        if (
          amethystValue === rubyValue ||
          amethystValue === topazValue ||
          amethystValue === sapphireValue ||
          rubyValue === topazValue ||
          rubyValue === sapphireValue ||
          topazValue === sapphireValue
        ) {
          amethystValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
          rubyValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
          topazValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
          sapphireValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        }
      }
    });

    $("#wins").html("<h6>Wins: </h6>" + wins);
    $("#losses").html("<h6>Losses: </h6>" + losses);
    $("#random-number").html("<h6>Number: </h6>" + randomNumber);
    $("#total").html("<h6>Current Total: </h6>" + currentTotal);
  });
});
