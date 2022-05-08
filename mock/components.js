"use strict";
/*jshint esversion: 11 */


class Header extends React.Component
{
	render(){
		return (
			<div className="header">
				<h1>MOCK DATA 3.0</h1>
				<h5>Generate sample data for testing.</h5>
			</div>
		);
	}
}

class DataRow extends React.Component
{
	constructor(props) {
		super(props);
		this.state = { };
		this.render = this.render.bind(this);
	}

	render()
	{
		const renderIdentifier = function()
		{
			let identifierSpanClass = "coverlabel ";
			if (this.props.identifier.length > 0) identifierSpanClass += "hoverlabel-lock";

			if (this.props.useIdentifiers)
			{
				return(
					<div className='text-cont' data-type='label' data-active='false'>
						<input name='txt_label' 
								type='text' 
								value={this.props.identifier} 
								onChange={(e)=>{this.props.changeIdentifier(this.props.myIndex, e.target.value)}}
								/>
						<span className={identifierSpanClass}>Identifier</span>
					</div>
				);
			}
			else
			{
				return(<div></div>);
			}
		}.bind(this);

		let dataSpanClass = "coverlabel ";
		if (this.props.data) dataSpanClass += "hoverlabel-lock";

		return(

			<div className="q-input-cont" >
				{renderIdentifier()}
				<div className='text-cont' data-type='output'>
					<input name='output' type='text' value={this.props.data} readOnly />
					<span className={dataSpanClass} >Data</span>
				</div>
				<button className='refresh_button' onClick={()=>this.props.changeData(this.props.myIndex, generateData( this.props.type ))}></button>
				<select className="gen_data_select" 
					value={this.props.type} 
					onChange={(e)=>{this.props.changeType(this.props.myIndex, e.target.value); }}>
					<option value='NONE'>[CHOOSE DATA TYPE]</option>
					<option value='fullname'>Full Name</option>
					<option value='lastname'>Last Name</option>
					<option value='firstname'>First Name</option>
					<option value='digit'>Single Digit</option>
					<option value='digits'>Digits</option>
					<option value='inc_id'>Incrementing ID</option>
					<option value='job'>Job</option>
					<option value='honorific'>Honorific</option>
					<option value='sentence'>Sentence</option>
					<option value='paragraph'>Text Paragraph</option>
					<option value='boolean'>Boolean</option>
					<option value='allspecialchars'>All &amp; Special Characters</option>
					<option value='lowchars'>Lower Case Letters</option>
					<option value='upperchars'>Upper Case Letters</option>
					<option value='lowernumberchars'>Lower Case Letters &amp; Numbers</option>
					<option value='uppernumberchars'>Upper Case Letters &amp; Numbers</option>
					<option value='upperlowernumberchars'>Upper, Lower Case Letters &amp; Numbers</option>
					<option value='lowernumberspecialchars'>Lower Case Letters and Special Characters</option>
					<option value='uppernumberspecialchars'>Upper Case Letters and Special Characters</option>
					<option value='decimal'>Decimal</option>
					<option value='fraction'>Fraction</option>
					<option value='unixtime'>Unix Time</option>
					<option value='email'>Email</option>
					<option value='nickname'>Nick Name</option>
					<option value='url'>URL</option>
					<option value='ipv4'>IP Address</option>
					<option value='useragent'>User Agent</option>
					<option value='hexcolor'>Color in Hexadecimal</option>
					<option value='macaddress'>MAC Address</option>
					<option value='uuid'>UUID</option>
					<option value='phonenumber'>Phone Number</option>
					<option value='moneyamount'>Money Amount</option>
					<option value='currencysymbol'>Currency Symbol</option>
					<option value='currencycode'>Currency Code</option>
					<option value='currencyname'>Currency Name</option>
					<option value='color'>Color</option>
					<option value='city'>City</option>
					<option value='country'>Country</option>
					<option value='countrycode'>Country Code</option>
					<option value='longitude'>Longitude</option>
					<option value='latitude'>Latitude</option>
					<option value='address'>Address</option>
					<option value='detailedaddress'>Detailed Address</option>
					<option value='month'>Name of Month</option>
					<option value='weekdayname'>Name of Weekday</option>
					<option value='operatingsystem'>Operating System</option>
					<option value='isp'>ISP</option>
					<option value='browser'>Browser</option>
					<option value='screensize'>Screen Size</option>
				</select>
				<button className='killfield' onClick={()=>this.props.removeField(this.props.myIndex)}>X</button>
			</div>
		);
	}
}

class FieldList extends React.Component
{
	constructor(props) {
		super(props);
		this.state = {  };
		this.render = this.render.bind(this);
	}

	render()
	{
		console.log("FieldList props fields", this.props.fields);
		let uiRows = [];
		for (let i = 0; i < this.props.fields.length; i++)
		{
			const e = this.props.fields[i];
			uiRows.push(<DataRow 
					key={i} 
					myIndex={i}
					useIdentifiers={this.props.useIdentifiers} 
					identifier={e.identifier} 
					data={e.data} 
					type={e.type}
					removeField={this.props.removeField}
					changeType={this.props.changeType}
					changeData={this.props.changeData}
					changeIdentifier={this.props.changeIdentifier}
				></DataRow>);
		}

		return(
			<section>
                <div className="listheader">
                    <div className='checkbox-cont'>
                        <input type='checkbox' 
								id='labelcheck' 
								name='labelcheck' 
								onChange={this.props.setUseIdentifiers} 
								value={this.props.useIdentifiers} 
								defaultChecked={this.props.useIdentifiers}  />
						<label htmlFor='labelcheck'> &nbsp; Use identifiers</label>
                    </div>
                    <button id='addfield' onClick={this.props.addNewField}>+ Add Data Field</button>
                </div>
                <div className='list-of-fields'>
					{uiRows}
				</div>
            </section>
		);
	}
}

class AppMain extends React.Component
{
	constructor(props) {
		super(props);
		let load = loadFromStorage();
		if (load) 
		{
			this.state = load;
			console.log("load", load);
		}
		else
		{
			this.state = { sqltablename: "", useIdentifiers: false, showSQLButton: false, fields: [{identifier: "", data: "", type: "NONE"}] };
			console.log("NO LOAD", load);
		}
		this.render = this.render.bind(this);
		this.setUseIdentifiers = this.setUseIdentifiers.bind(this);
		this.setSQLTableName = this.setSQLTableName.bind(this);
		this.determineSQLExportEnabled = this.determineSQLExportEnabled.bind(this);
		this.addNewField = this.addNewField.bind(this);
		this.removeField = this.removeField.bind(this);
		this.changeType = this.changeType.bind(this);
		this.changeData = this.changeData.bind(this);
		this.changeIdentifier = this.changeIdentifier.bind(this);
		console.log("this is the state at the constructor", this.state);
		console.log("this is the fields at the constructor", this.state.fields);
	}

	changeIdentifier = function(index, _val)
	{
		let _fields = this.state.fields;
		_fields[index].identifier = _val;
		this.setState({fields: _fields}, () => saveToStorage(this.state));
	}

	changeData = function(index, _val)
	{
		let _fields = this.state.fields;
		_fields[index].data = _val;
		this.setState({fields: _fields},() => saveToStorage(this.state));
	}

	changeType = function(index, _val)
	{
		let _fields = this.state.fields;
		_fields[index].type = _val;
		_fields[index].data = generateData( _val );
		this.setState({fields: _fields},() => saveToStorage(this.state));
	}

	addNewField = function()
	{
		let newField = {identifier: "", data: "", type: "NONE"};
		let _fields = this.state.fields;
		_fields.push(newField);
		this.setState({fields: _fields},() => saveToStorage(this.state));
	}

	removeField = function(index)
	{
		let _fields = this.state.fields;
		if (_fields.length <= 1) return;
		_fields.splice(index, 1);
		this.setState({fields: _fields},() => saveToStorage(this.state));
	}

	determineSQLExportEnabled = function()
	{
		if (this.state.sqltablename.length > 0 && this.state.useIdentifiers)
		{
			this.setState({ showSQLButton: true },() => saveToStorage(this.state));
		}
		else
		{
			this.setState({ showSQLButton: false },() => saveToStorage(this.state));
		}
	}

	setUseIdentifiers = function(e){
		this.setState({ useIdentifiers: e.target.checked }, this.determineSQLExportEnabled);
	}

	setSQLTableName = function(e){
		this.setState({ sqltablename: e.target.value }, this.determineSQLExportEnabled);
	}

	// componentDidMount() // Runs after the first render() lifecycle
	// {
	// }

	render(){
		console.log("appmain render this.state.fields", this.state.fields);
		return(
			<div>
				<Header></Header>
				<div className='container'>
					<FieldList useIdentifiers={this.state.useIdentifiers}
          						setUseIdentifiers={this.setUseIdentifiers}
								  fields={this.state.fields}
								  addNewField={this.addNewField}
								  removeField={this.removeField}
								  changeType={this.changeType} 
								  changeData={this.changeData} 
								  changeIdentifier={this.changeIdentifier} >
		  			</FieldList>
					<ExportPanel sqltablename={this.state.sqltablename} 
								showSQLButton={this.state.showSQLButton}
          						setSQLTableName={this.setSQLTableName} 
								  fields={this.state.fields} 
								  useIdentifiers={this.state.useIdentifiers}></ExportPanel>
				</div>
			</div>
		);
	}
}

class ExportPanel extends React.Component
{
	constructor(props) {
		super(props);
		this.state = { rownum: 0, tableCreationInstruction: false };
		this.rownumChange = this.rownumChange.bind(this);
		this.tableCreationInstructionChange = this.tableCreationInstructionChange.bind(this);
		this.genJson = this.genJson.bind(this);
		this.genCSV = this.genCSV.bind(this);
		this.genSQL = this.genSQL.bind(this);
		this.render = this.render.bind(this);
	}

	rownumChange = function(e)
	{
		this.setState({ rownum: e.target.value });
	}

	tableCreationInstructionChange = function(e)
	{
		this.setState({ tableCreationInstruction: e.target.checked });
	}

	genJson = function(e)
	{
		console.log("genJson", "this.rownum", this.state.rownum, this.props.fields);
        if (this.state.rownum > 0)
        {
			let json = exportRowsAsJSON(this.props.useIdentifiers, this.props.fields, this.state.rownum);
            downloadObjectAsJson( json, "export_data.json");
        }
	}

	genCSV = function(e)
	{
		console.log("genCSV", e);
        if (this.state.rownum > 0)
        {
			let csv = exportRowsAsCSV(this.props.useIdentifiers, this.props.fields, this.state.rownum);
			downloadGeneric(csv, "export_data.csv");
        }
	}

	genSQL = function(e)
	{
		console.log("genSQL", e);
		if (this.state.rownum > 0)
        {
			console.log("this.state.sqltablename", this.state.sqltablename);
			let sql = exportRowsAsSQL(this.props.fields, this.state.rownum, this.state.tableCreationInstruction, this.props.sqltablename);
			downloadGeneric(sql, "export_data.sql");
        }
		
	}

	render() {

		const condRenderGenSQLButton = function()
		{
			if (this.props.showSQLButton)
			{
				return (
					<p>
						<button className='gen_data_button' 
								id='but_exp_sql_many-rows' 
								onClick={this.genSQL} >GENERATE SQL</button>
					</p>
				);
			}
			else
			{
				return(<p className='warn'>SQL Export requires table name and identifiers</p>);
			}
		}.bind(this);

		return (
			<section className='export_section'>
				<h2>Exporting</h2>
				<div>
					<input type='number' id='rownum' value={this.state.rownum} onChange={this.rownumChange} /><label htmlFor='rownum' > Rows</label>
				</div>
				<div><button className='gen_data_button' id='but_exp_many-rows' onClick={this.genJson}>GENERATE JSON</button> </div>
				<div><button className='gen_data_button' id='but_exp_csv-many' onClick={this.genCSV}>GENERATE CSV</button> </div>
				<p><br /><br /></p>
				<div>
					<p>
						<label htmlFor='sql_table'>SQL Table Name</label><br />
						<input type='text' 
								id='sql_table' 
								name='sql_table' 
								value={this.props.sqltablename} 
								onChange={this.props.setSQLTableName} 
								/>
					</p>
					<br />
					<p><input type='checkbox' 
								id='sql_table_create' 
								name='sql_table_create'
								value={this.state.tableCreationInstruction} 
								onChange={this.tableCreationInstructionChange} 
								defaultChecked={this.state.tableCreationInstruction}  
								 />
								 <label htmlFor='sql_table_create'> &nbsp; Include CREATE TABLE</label>
					</p>
					{condRenderGenSQLButton()}
				</div>
			</section>
			);
	}
}
