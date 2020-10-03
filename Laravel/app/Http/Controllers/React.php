<?php
namespace App\Http\Controllers\Controller;
namespace App\Http\Controllers;

use Illuminate\Http\Request;

class React extends Controller
{
  //Answer 1
  public function getReact()
 {
  $Result=[];
  for( $i=1; $i<=100; $i++ )

  {
          if(( $i % 3 ) == 0 && ( $i % 5 ) == 0){
              $Result[] = "PingPong ";
          }else if (( $i % 5 ) == 0){
              $Result[] = "Pong ";
          }else if(( $i % 3 ) == 0){
            $Result[] = "Ping ";
          }
          else{
            $Result[] = "{$i} " ;
          }
}


        return [$Result];
 }
 //Answer 2
 public function putReact(Request $request,$number)
{
  $Result=[];
  for( $j=0; $j<$number; $j++ )
  {
          for( $i=0; $i<$number; $i++ ){
                      if($i==$number-1){
                      $Result[] = "{$number} \n";
                              }
                                else{
                                          if($j!=0 && $j!=$number-1 && $i!=0){
                                            $Result[] = "X";}
                                          else{
                                          $Result[] = $number;
                                                  }

                                  }

                  }
}







       return [$Result];
}

//Answer 3
public function putReact2(Request $request,$number)
{
//Get Array
 $Result=substr($number, 1, -1);
 $arr = explode(',', $Result);


     $length=sizeof ($arr);
     $arrayOrdenado=[];
     $NumberMaxim=0;
     $NumberMinim=0;
/*
//Orden Burbuja Descendente
    for ($x = 0; $x < $length; $x++) {
        for ($i = 0; $i < $length-$x-1; $i++) {
            if($arr[$i] < $arr[$i+1]){
                $tmp = $arr[$i+1];
                $arr[$i+1] = $arr[$i];
                $arr[$i] = $tmp;
            }
        }
    }
*/
    //Orden Burbuja Ascendente
        for ($x = 0; $x < $length-1; $x++) {
            for ($i = 0; $i < $length-1; $i++) {
                if($arr[$i] > $arr[$i+1]){
                    $tmp = $arr[$i];
                    $arr[$i] = $arr[$i+1];
                    $arr[$i+1] = $tmp;
                }
            }
        }



      return [$arr];
}
}
