function takeANumber(line,name){

line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line){
  if (line.length===0){
    return "There is nobody waiting to be served!"
  }else{
    const servee=line.shift()
    return `Currently serving ${servee}.`
  }
}

function currentLine(line){
  if (line.length===0){
    return "TThe line is currently empty."
  }else{
    for (let i=0;i<line.length;i++){
      return `The line is currently; ${i+1}. ${line[i]},`
        }
      }
}
