//BẠN SỬA MÃNG BÊN DƯỚI, MỖI PHẦN TỬ LÀ MỘT KÍ TỰ TÍNH LUỐN KÍ TỰ TRẮNG NHÉ! BẠN CÓ THỂ THÊM NHIỀU PHẦN TỬ HƠN KHÔNG NHẤT THIẾT LÀ 28
//XEM KĨ VIDEO CỦA MÌNH HƠN Ở PHẦN NÀY NHÉ!

var a = new Array(),
    n = "";
a[1] = "D";
a[2] = "ạ";
a[3] = " ";
a[4] = "B";
a[5] = "é";
a[6] = " ";
a[7] = "Y";
a[8] = "ê";
a[9] = "u";
a[10] = " ";
a[11] = "A";
a[12] = "n";
a[13] = "h";
a[14] = " ";
a[15] = "n";
a[16] = "h";
a[17] = "i";
a[18] = "ề";
a[19] = "u";

function one() {
    t = document.f.txt.value;
    j = t.length;
    if (j > 0) {
        for (var i = 1; i <= j; i++) {
            n = n + a[i];
            if (i == 20) {
                document.f.txt.value = "";
                n = "";
            }
        }
    }
    document.f.txt.value = n;
    n = "";
    setTimeout("one()", 1);
}
function s() {}
function on() {
    one();
}

$(document).ready(function () {
    $("#k").hide();
    $("h1").click(function () {
        $(".active").removeClass("active");
        $("#k").slideUp("fast");
        if ($(this).next("#k").is(":hidden") == true) {
            $(this).addClass("active");
            $(this).next("#k").slideDown("fast");
        }
    });
});
function Yeu() {
    $("#divResult").fadeOut(0);
    //PHẦN NÀY LÀ PHẦN HIỆN KHI BẠN BẤM "GỞI ĐI" LINK Ở SAU LÀ ICON MẶT CƯỜI XÓA BỎ CŨNG ĐƯỢC CÒN TEXT THÌ BẠN SỬA LẠI THEO Ý CỦA BẠN.
    $("#divResult").html(
        "</br><h2> :3 Anh Sỹ yêu bé nhiềuuu<img src='http://website1gia.com/files/assets/3.png'</img></h2>"
    );
    $("#divResult").fadeIn(2000, function () {
        $("#divResult2").fadeOut(0);
        $("#divResult2").html(
            "<p>♥ Anh Sỹ luôn đúng khi yêu eimmm Liên Ngọc Thủy Tiên .<img src='http://website1gia.com/files/assets/4.png'/></p></br>"
        );
    });
}
