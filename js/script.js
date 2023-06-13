// for omnblur

function validatewindName() {
  const x = document.querySelector('#wind').value;
  if (x.length < 3 || x.length > 10) {
    document.querySelector('#feedbwindname').innerHTML = ' Invalid value provided ';
    return false;
  }

  document.querySelector('#feedbwindname').innerHTML = ' Valid ';
  return true;
}

function validatestoneName() {
  const x = document.querySelector('#stone').value;
  if (x.length < 3 || x.length > 10) {
    document.querySelector('#feedbstonename').innerHTML = ' Invalid value provided ';
    return false;
  }

  document.querySelector('#feedbstonename').innerHTML = ' Valid ';
  return true;
}

function validatewaterName() {
  const x = document.querySelector('#water').value;
  if (x.length < 3 || x.length > 10) {
    document.querySelector('#feedbwatername').innerHTML = ' Invalid value provided ';
    return false;
  }

  document.querySelector('#feedbwatername').innerHTML = ' Valid ';
  return true;
}

function validateinsectName() {
  const x = document.querySelector('#insect').value;
  if (x.length < 3 || x.length > 10) {
    document.querySelector('#feedbinsectname').innerHTML = ' Invalid value provided ';
    return false;
  }

  document.querySelector('#feedbinsectname').innerHTML = ' Valid ';
  return true;
}

function validateloveName() {
  const x = document.querySelector('#love').value;
  if (x.length < 3 || x.length > 10) {
    document.querySelector('#feedblovename').innerHTML = ' Invalid value provided ';
    return false;
  }

  document.querySelector('#feedblovename').innerHTML = ' Valid ';
  return true;
}

function validateserpentName() {
  const x = document.querySelector('#serpent').value;
  if (x.length < 3 || x.length > 10) {
    document.querySelector('#feedbserpentname').innerHTML = ' Invalid value provided ';
    return false;
  }

  document.querySelector('#feedbserpentname').innerHTML = ' Valid ';
  return true;
}

function validateflameName() {
  const x = document.querySelector('#flame').value;
  if (x.length < 3 || x.length > 10) {
    document.querySelector('#feedbflamename').innerHTML = ' Invalid value provided ';
    return false;
  }

  document.querySelector('#feedbflamename').innerHTML = ' Valid ';
  return true;
}

//                          on blur ends here

function areAllValid() {
  return (
    validatewindName() &&
    validatestoneName() &&
    validatewaterName() &&
    validateinsectName() &&
    validateloveName() &&
    validateserpentName() &&
    validateflameName()
  );
}

const display = document.querySelector('#display');

display.onclick = function myButton() {
  if (areAllValid()) {
    let data = '';
    const elem = document.getElementById('myform').elements;

    for (let i = 0; i < 6; ) {
      data += `<b>Type : </b>${elem[i].type}&nbsp&nbsp`;
      data += `<b>Field Name : </b>${elem[i].id}&nbsp&nbsp`;
      data += `<b>Value : </b>${elem[i].value}&nbsp&nbsp`;
      data += '<br><br>';
    }
    document.querySelector('#previewformdata').innerHTML = data;
  } else {
    document.querySelector('#previewformdata').innerHTML = '<h4>Please Insert Valid Details</h4>';
  }
};

//  to target my html

const wind = document.querySelector('#wind');
wind.onblur = validatewindName;

const stone = document.querySelector('#stone');
stone.onblur = validatestoneName;

const water = document.querySelector('#water');
water.onblur = validatewaterName;

const insect = document.querySelector('#insect');
insect.onblur = validateinsectName;

const love = document.querySelector('#love');
love.onblur = validateloveName;

const serpent = document.querySelector('#serpent');
serpent.onblur = validateserpentName;

const flame = document.querySelector('#flame');
flame.onblur = validateflameName;
