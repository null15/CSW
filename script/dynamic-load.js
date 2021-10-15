let Name, Rarity, Movement, Faction, Cost, Type, Role, Target, atk, crit, hit, hp, def, eva, bio = [];

let Rank2Basic, Rank3Basic, Rank4Basic, Rank5Basic = "";
let Rank2Passive, Rank3Passive, Rank4Passive, Rank5Passive = "";
let Rank2Special, Rank3Special, Rank4Special, Rank5Special = "";
let Rank2Ultimate, Rank3Ultimate, Rank4Ultimate, Rank5Ultimate = "";

let biography = ["biography"];

let BasicAttackName = "";
let PassiveSkillName = "";
let SpecialSkillName = "";
let UltimateSkillName = "";

let NameAdd = document.getElementById("Name");
let RarityAdd = document.getElementById("Rarity");
let MovementAdd = document.getElementById("Movement");
let FactionAdd = document.getElementById("Faction");
let TargetAdd = document.getElementById("Target");
let TypeAdd = document.getElementById("Type");
let RoleAdd = document.getElementById("Role");
let CostAdd = document.getElementById("Cost");

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

let BioAdd = document.getElementById("biography");

$( document ).ready(function() {

    fetch("../data/bio.json")
    .then(function (resp) {
        return resp.json();
    })
    .then(function(data) {
        
        bio = data[biography][0][uid];

        BioAdd.innerText += bio;

    })

    fetch("../data/chars.json")
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {

        Name = data[pid][0].Name;
        Rarity = data[pid][0].Rarity;
        Movement = data[pid][0].Movement;
        Faction = data[pid][0].Faction;
        Type = data[pid][0].Type;
        Role = data[pid][0].Role;
        Target = data[pid][0].Target;
        Cost = data[pid][0].Cost;
        
        atk = data[pid][0].Attack;
        crit = data[pid][0].Critical;
        hit = data[pid][0].Hit;

        hp = data[pid][0].Health;
        def = data[pid][0].Defense;
        eva = data[pid][0].Evasion;

        BasicAttackName = data[pid][0].BasicSkillName;
        PassiveSkillName = data[pid][0].PassiveSkillName;
        SpecialSkillName = data[pid][0].SpecialSkillName;
        UltimateSkillName = data[pid][0].UltimateSkillName;

        BasicSkillDesc = data[pid][0].BasicSkillDesc;
        PassiveSkillDesc = data[pid][0].PassiveSkillDesc;
        SpecialSkillDesc = data[pid][0].SpecialSkillDesc;
        UltimateSkillDesc = data[pid][0].UltimateSkillDesc;

        Rank2Basic = data[pid][0].Rank2Basic;
        Rank3Basic = data[pid][0].Rank3Basic;
        Rank4Basic = data[pid][0].Rank4Basic;
        Rank5Basic =  data[pid][0].Rank5Basic;

        Rank2Passive = data[pid][0].Rank2Passive;
        Rank3Passive = data[pid][0].Rank3Passive;
        Rank4Passive = data[pid][0].Rank4Passive;
        Rank5Passive =  data[pid][0].Rank5Passive;

        Rank2Special = data[pid][0].Rank2Special;
        Rank3Special = data[pid][0].Rank3Special;
        Rank4Special = data[pid][0].Rank4Special;
        Rank5Special =  data[pid][0].Rank5Special;

        Rank2Ultimate = data[pid][0].Rank2Ultimate;
        Rank3Ultimate = data[pid][0].Rank3Ultimate;
        Rank4Ultimate = data[pid][0].Rank4Ultimate;
        Rank5Ultimate =  data[pid][0].Rank5Ultimate;

        RarityAdd.src = "../../assets/images/"+Rarity+".png"
        MovementAdd.textContent += Movement;
        FactionAdd.textContent += Faction;
        TypeAdd.textContent += Type;
        RoleAdd.textContent += Role;
        TargetAdd.textContent += Target;
        CostAdd.textContent += Cost;

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

    // Max stats last check: 10-14 //

    var max_hp = 83000; 
    var max_atk = 8000;
    var max_def = 3200;
    var max_crit = 1300;
    var max_hit = 2200;
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