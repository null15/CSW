let charname, rarity, affiliation, faction, cost, type, role, target, atk, crit, hit, hp, def, eva = [];

let Rank2Basic, Rank3Basic, Rank4Basic, Rank5Basic = "";
let Rank2Passive, Rank3Passive, Rank4Passive, Rank5Passive = "";
let Rank2Special, Rank3Special, Rank4Special, Rank5Special = "";
let Rank2Ultimate, Rank3Ultimate, Rank4Ultimate, Rank5Ultimate = "";

let filename = document.title;

let BasicAttackName = "";
let PassiveSkillName = "";
let SpecialSkillName = "";
let UltimateSkillName = "";

let BasicAttackNameAdd = document.getElementById("BasicAttackName");
let PassiveSkillNameAdd = document.getElementById("PassiveSkillName");
let SpecialSkillNameAdd = document.getElementById("SpecialSkillName");
let UltimateSkillNameAdd = document.getElementById("UltimateSkillName");

let BasicAttackDescAdd = document.getElementById("BasicSkillDesc");
let PassiveSkillDescAdd = document.getElementById("PassiveSkillDesc");
let SpecialSkillDescAdd = document.getElementById("SpecialSkillDesc");
let UltimateSkillDescAdd = document.getElementById("UltimateSkillDesc");

let Rank2AddBasic = document.getElementById("Rank2Basic");
let Rank3AddBasic = document.getElementById("Rank3Basic");
let Rank4AddBasic = document.getElementById("Rank4Basic");
let Rank5AddBasic = document.getElementById("Rank5Basic");

let Rank2AddPassive = document.getElementById("Rank2Passive");
let Rank3AddPassive = document.getElementById("Rank3Passive");
let Rank4AddPassive = document.getElementById("Rank4Passive");
let Rank5AddPassive = document.getElementById("Rank5Passive");

let Rank2AddSpecial = document.getElementById("Rank2Special");
let Rank3AddSpecial = document.getElementById("Rank3Special");
let Rank4AddSpecial = document.getElementById("Rank4Special");
let Rank5AddSpecial = document.getElementById("Rank5Special");

let Rank2AddUltimate = document.getElementById("Rank2Ultimate");
let Rank3AddUltimate = document.getElementById("Rank3Ultimate");
let Rank4AddUltimate = document.getElementById("Rank4Ultimate");
let Rank5AddUltimate = document.getElementById("Rank5Ultimate");

$( document ).ready(function() {

    fetch("../../data/chars.json")
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {

        charname = data[filename][0].Name;
        rarity = data[filename][0].Rarity;
        affiliation = data[filename][0].Affiliation;
        faction = data[filename][0].Faction;
        type = data[filename][0].Type;
        role = data[filename][0].Role;
        target = data[filename][0].Target;
        cost = data[filename][0].Cost;
        
        atk = data[filename][0].Attack;
        crit = data[filename][0].Critical;
        hit = data[filename][0].Hit;

        hp = data[filename][0].Health;
        def = data[filename][0].Defense;
        eva = data[filename][0].Evasion;

        BasicAttackName = data[filename][0].BasicSkillName;
        PassiveSkillName = data[filename][0].PassiveSkillName;
        SpecialSkillName = data[filename][0].SpecialSkillName;
        UltimateSkillName = data[filename][0].UltimateSkillName;

        BasicSkillDesc = data[filename][0].BasicSkillDesc;
        PassiveSkillDesc = data[filename][0].PassiveSkillDesc;
        SpecialSkillDesc = data[filename][0].SpecialSkillDesc;
        UltimateSkillDesc = data[filename][0].UltimateSkillDesc;

        Rank2Basic = data[filename][0].Rank2Basic;
        Rank3Basic = data[filename][0].Rank3Basic;
        Rank4Basic = data[filename][0].Rank4Basic;
        Rank5Basic =  data[filename][0].Rank5Basic;

        Rank2Passive = data[filename][0].Rank2Passive;
        Rank3Passive = data[filename][0].Rank3Passive;
        Rank4Passive = data[filename][0].Rank4Passive;
        Rank5Passive =  data[filename][0].Rank5Passive;

        Rank2Special = data[filename][0].Rank2Special;
        Rank3Special = data[filename][0].Rank3Special;
        Rank4Special = data[filename][0].Rank4Special;
        Rank5Special =  data[filename][0].Rank5Special;

        Rank2Ultimate = data[filename][0].Rank2Ultimate;
        Rank3Ultimate = data[filename][0].Rank3Ultimate;
        Rank4Ultimate = data[filename][0].Rank4Ultimate;
        Rank5Ultimate =  data[filename][0].Rank5Ultimate;

        BasicAttackNameAdd.textContent += BasicAttackName;
        PassiveSkillNameAdd.textContent += PassiveSkillName;
        SpecialSkillNameAdd.textContent += SpecialSkillName;
        UltimateSkillNameAdd.textContent += UltimateSkillName;

        BasicAttackDescAdd.textContent += BasicSkillDesc;
        PassiveSkillDescAdd.textContent += PassiveSkillDesc;
        SpecialSkillDescAdd.textContent += SpecialSkillDesc;
        UltimateSkillDescAdd.textContent += UltimateSkillDesc;

        Rank2AddBasic.textContent += Rank2Basic;
        Rank3AddBasic.textContent += Rank3Basic;
        Rank4AddBasic.textContent += Rank4Basic;
        Rank5AddBasic.textContent += Rank5Basic;

        Rank2AddPassive.textContent += Rank2Passive;
        Rank3AddPassive.textContent += Rank3Passive;
        Rank4AddPassive.textContent += Rank4Passive;
        Rank5AddPassive.textContent += Rank5Passive;

        Rank2AddSpecial.textContent += Rank2Special;
        Rank3AddSpecial.textContent += Rank3Special;
        Rank4AddSpecial.textContent += Rank4Special;
        Rank5AddSpecial.textContent += Rank5Special;

        Rank2AddUltimate.textContent += Rank2Ultimate;
        Rank3AddUltimate.textContent += Rank3Ultimate;
        Rank4AddUltimate.textContent += Rank4Ultimate;
        Rank5AddUltimate.textContent += Rank5Ultimate;

    var max_atk = 8000;
    var max_crit = 1500;
    var max_hit = 2500;

    var max_hp = 80000;
    var max_def = 1500;
    var max_eva = 1500;

    var atkwidthcalc = 0;
    var critwidthcalc = 0;
    var hitwidthcalc = 0;

    var hpwidthcalc = 0;
    var defwidthcalc = 0;
    var evawidthcalc = 0;

    var atkwidth = ""
    var critwidth = ""
    var hitwidth = ""

    var hpwidth = ""
    var defwidth = ""
    var evawidth = ""

    $(".p_atk").attr("data-value",atk);
    $(".p_crit").attr("data-value",crit);
    $(".p_hit").attr("data-value",hit);

    $(".atkbar").attr("value",atk);
    $(".atkbar").attr("max",max_atk);

    $(".critbar").attr("value",crit);
    $(".critbar").attr("max",max_crit);

    $(".hitbar").attr("value",hit);
    $(".hitbar").attr("max",max_hit);

    $(".p_hp").attr("data-value",hp);
    $(".p_def").attr("data-value",def);
    $(".p_eva").attr("data-value",eva);

    $(".hpbar").attr("value",hp);
    $(".hpbar").attr("max",max_hp);

    $(".defbar").attr("value",def);
    $(".defbar").attr("max",max_def);

    $(".evabar").attr("value",eva);
    $(".evabar").attr("max",max_eva);

    atkwidthcalc = (atk/max_atk) * 100;
    critwidthcalc = (crit/max_crit) * 100;
    hitwidthcalc = (hit/max_hit) * 100;

    hpwidthcalc = (hp/max_hp) * 100;
    defwidthcalc = (def/max_def) * 100;
    evawidthcalc = (eva/max_eva) * 100;

    atkwidth = atkwidthcalc.toString();
    critwidth = critwidthcalc.toString();
    hitwidth = hitwidthcalc.toString();

    hpwidth = hpwidthcalc.toString();
    defwidth = defwidthcalc.toString();
    evawidth = evawidthcalc.toString();

    $(".p_atk").attr("style","width:"+atkwidth+"%");
    $(".p_crit").attr("style","width:"+critwidth+"%");
    $(".p_hit").attr("style","width:"+hitwidth+"%");

    $(".p_hp").attr("style","width:"+hpwidth+"%");
    $(".p_def").attr("style","width:"+defwidth+"%");
    $(".p_eva").attr("style","width:"+evawidth+"%");
});});