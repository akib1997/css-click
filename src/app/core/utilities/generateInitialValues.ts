function generateInitialValues(valuesArray: any[]) {
  return {
    display: valuesArray[0],
    flexDirection: valuesArray[1],
    flexWrap: valuesArray[2],
    alignItems: valuesArray[3],
    justifyContent: valuesArray[4],
    alignContent: valuesArray[5],
  };
}
