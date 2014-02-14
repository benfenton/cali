

mocha.bail(false);


describe( "Test failures", function () {
  it( "should fail on assertion", function () {
    expect ( "hi" ).to.equal( "goodbye" );
  });

  it( "should fail on exception", function () {
    throw new Error();
  });
});