/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var length = preferences.length;
  var count = 0;
  for (var i=0;i<length;i++)
  {
    if(preferences[i]!=-1/*check of condition for counting different love triangles phenomenons*/
      && preferences[i]-1<length && preferences[preferences[i]-1]<length && preferences[preferences[preferences[i]-1]-1]<length/*check the output of indexes beyond the limits of array*/
      && preferences[i]!=preferences[preferences[i]-1] && preferences[preferences[i]-1]!=preferences[preferences[preferences[i]-1]-1]/* the elimination of counting equal values ​​in array*/
      && preferences[preferences[preferences[i]-1]-1]==i+1/*check of main condition*/)
    {
      count++;//calculating love triangles phenomenons
      preferences[i]=-1;preferences[preferences[i]-1]=-1;preferences[preferences[preferences[i]-1]-1]=-1;//the condition for counting different love triangles phenomenons
    }    
  }
  return count;
};
