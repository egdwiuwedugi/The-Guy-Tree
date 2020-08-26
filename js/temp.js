function updateTemp() {
	if (!tmp.layerEffs) tmp.layerEffs = {}
	for (let name in LAYER_EFFS) tmp.layerEffs[name] = LAYER_EFFS[name]()
	
	if (!tmp.layerReqs) tmp.layerReqs = {}
	for (let name in LAYER_REQS) tmp.layerReqs[name] = getLayerReq(name)
		
	if (!tmp.gainMults) tmp.gainMults = {}
	if (!tmp.resetGain) tmp.resetGain = {}
	if (!tmp.nextAt) tmp.nextAt = {}
	if (!tmp.layerAmt) tmp.layerAmt = {}
	for (let i in LAYERS) {
		tmp.layerAmt[LAYERS[i]] = getLayerAmt(LAYERS[i])
		tmp.gainMults[LAYERS[i]] = getLayerGainMult(LAYERS[i])
		tmp.resetGain[LAYERS[i]] = getResetGain(LAYERS[i])
		tmp.nextAt[LAYERS[i]] = getNextAt(LAYERS[i])
	}
	
	tmp.pointGen = getPointGen()
	
	tmp.atbb = addToBoosterBase()
	tmp.atgb = addToGenBase()
	
	tmp.genPowEff = getGenPowerEff()
	
	tmp.enhPow = getEnhancerPow()
	tmp.enhEff = getEnhancerEff()
	tmp.enhEff2 = getEnhancerEff2()
	
	tmp.freeExtCap = getFreeExtCapsules()
	tmp.timeEff = getTimeEnergyEff()
	
	if (!tmp.spaceBuildEff) tmp.spaceBuildEff = {}
	for (let i=1;i<=5;i++) tmp.spaceBuildEff[i] = getSpaceBuildingEff(i)
	tmp.sbUnl = getSpaceBuildingsUnl()

	tmp.quirkEff = getQuirkEnergyEff()
	
	if (!tmp.hcActive) tmp.hcActive = {}
	for (let row=1;row<=H_CHALLS.rows;row++) {
		for (let col=1;col<=H_CHALLS.cols;col++) {
			let id = row*10+col
			tmp.hcActive[id] = HCActive(id)
		}
	}
}