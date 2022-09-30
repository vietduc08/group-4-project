    document.getElementById("showcart").style.display="none";
    let giohang = new Array();

    function themvaogiohang(x) {
        var product = x.parentElement.children;
        var hinh = product[0].children[0].src;
        var ten = product[1].innerText;
        var gia = product[2].children[0].innerText;
        var soluong = product[3].value;

        var sp = new Array(hinh, ten, gia, soluong);

        giohang.push(sp);
//
        console.log(giohang);
        showcountsp();
        //luu san pham vao session
        sessionStorage.setItem("giohang",JSON.stringify(giohang));
    }
    function showcountsp() {
        document.getElementById("countsp").innerHTML = giohang.length;
    }
    function showmycart(){
        var ttgh="";
        var tong=0;
        for (let i =0;i<giohang.length;i++){
            var tt=parseInt(giohang[i][2]) * parseInt(giohang[i][3]);
            tong += tt;
            ttgh+='<tr>\n' +
                '                    <td>'+(i + 1)+'</td>\n' +
                '                    <td><img src="'+giohang[i][0]+'" alt=""></td>\n' +
                '                    <td>'+giohang[i][1]+'</td>\n' +
                '                    <td>'+giohang[i][2]+'</td>\n' +
                '                    <td>'+giohang[i][3]+'</td>\n' +
                '                    <td>\n' +
                '                        <div>'+ tt +'</div>\n' +
                '                    </td>\n' +
                '                </tr>';
        }
        ttgh += '<tr>\n' +
            '                    <th colspan="5">Tổng đơn hàng</th>\n' +
            '                    <th>\n' +
            '                    <div>'+ tong + '</div>\n' +
            '                    </th>\n' +

            '                </tr>';
        document.getElementById('mycart').innerHTML = ttgh;
    }
    function showcart(){
      let x= document.getElementById("showcart");
      if(x.style.display == "block"){
          x.style.display = "none";
      }else{
          x.style.display = "block";
      }
      showmycart();
    }


    function showgiohang_trangthanhtoan(){
        var gh=sessionStorage.getItem("giohang");
        var giohang=JSON.parse(gh);
        var ttgh="";
        var tong=0;
        for (let i =0;i<giohang.length;i++){
            var tt=parseInt(giohang[i][2]) * parseInt(giohang[i][3]);
            tong += tt;
            ttgh+='<tr>\n' +
                '                    <td>'+(i + 1)+'</td>\n' +
                '                    <td><img src="'+giohang[i][0]+'" alt=""></td>\n' +
                '                    <td>'+giohang[i][1]+'</td>\n' +
                '                    <td>'+giohang[i][2]+'</td>\n' +
                '                    <td>'+giohang[i][3]+'</td>\n' +
                '                    <td>\n' +
                '                        <div>'+ tt +'</div>\n' +
                '                    </td>\n' +
                '                </tr>';
        }
        ttgh += '<tr>\n' +
            '                    <th colspan="5">Tổng đơn hàng</th>\n' +
            '                    <th>\n' +
            '                    <div>'+ tong + '</div>\n' +
            '                    </th>\n' +

            '                </tr>';
        document.getElementById('mycart').innerHTML = ttgh;
    }
    function dongydathang(){
      var hoten = document.getElementById("hoten").value;
      var diachi = document.getElementById("diachi").value;
      var dienthoai = document.getElementById("dienthoai").value;
      var email = document.getElementById("email").value;

      var ngnhan = new Array(hoten,diachi,dienthoai,email);
      console.log(ngnhan);
      sessionStorage.setItem("ngnhan",JSON.stringify(ngnhan));

      window.location.assign("payment.html");
    }
    function showthongtinnguoinhan(){
        var ngnhan = sessionStorage.getItem("ngnhan");
        var thongtin = JSON.parse(ngnhan);

        tt='<tr>\n' +
            '                            <td width="20%">Họ tên</td>\n' +
            '                            <td>'+thongtin[0]+'</td>\n' +
            '                        </tr>\n' +
            '                        <tr>\n' +
            '                            <td>Địa chỉ</td>\n' +
            '                            <td>'+thongtin[1]+'</td>\n' +
            '                        </tr>\n' +
            '                        <tr>\n' +
            '                            <td>Điện thoại</td>\n' +
            '                            <td>'+thongtin[2]+'</td>\n' +
            '                        </tr>\n' +
            '                        <tr>\n' +
            '                            <td>Email</td>\n' +
            '                            <td>'+thongtin[3]+'</td>\n' +
            '                        </tr>';

        document.getElementById('thongtinnhanhang').innerHTML = tt;

    }

