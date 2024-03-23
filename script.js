function highlightPartsOfSpeech() {
  const inputText = document.getElementById("input-text").value;

  // Define regular expressions to match different parts of speech
  const nounRegex = /\b[A-Z][a-z]*\b/g; // Words starting with a capital letter
  const verbRegex = /\b(?:am|is|are|was|were|be|been|being|has|have|had|do|does|did|will|would|shall|should|may|might|must|can|could|make|take|come|go|get|put|give|see|know|find|think|tell|ask|work|seem|feel|try|leave|call|need|want|mean|keep|let|begin|seem|help|talk|turn|start|show|hear|play|run|move|like|live|believe|hold|bring|happen|write|provide|sit|stand|lose|pay|meet|include|continue|set|learn|change|lead|understand|watch|follow|stop|create|speak|read|allow|add|spend|grow|open|walk|win|offer|remember|consider)\b/g; // Common verbs
  const adverbRegex = /\b(?:very|really|quickly|slowly|badly|well|often|sometimes|never|always|usually|seldom|hardly|completely|carefully|correctly|eagerly|easily|happily|immediately|loudly|politely|quietly|rarely|safely|simply|soon|tightly|angrily|anxiously|awkwardly|blindly|boldly|bravely|brightly|busily|calmly|carelessly|cheerfully|clearly|closely|correctly|curiously|deeply|eagerly|easily|fast|fiercely|foolishly|frantically|gently|gladly|gracefully|greedily|happily|heavily|helplessly|hungrily|innocently|jovially|justly|kindly|lightly|loosely|madly|meanly|neatly|nervously|noisily|obediently|patiently|perfectly|politely|powerfully|promptly|quickly|quietly|rapidly|rudely|safely|suddenly|unexpectedly|viciously|wildly|wisely|worriedly|wrongly)\b/g; // Common adverbs
  const prepositionRegex = /\b(?:about|above|across|after|against|along|among|around|at|before|behind|below|beneath|beside|between|beyond|by|down|during|except|for|from|in|inside|into|like|near|of|off|on|onto|out|outside|over|past|since|through|to|toward|under|underneath|until|up|upon|with|within|without|aboard|about|above|across|after|against|along|amid|among|anti|around|as|at|before|behind|below|beneath|beside|besides|between|beyond|but|by|concerning|considering|despite|down|during|except|excepting|excluding|following|for|from|in|inside|into|like|minus|near|of|off|on|onto|opposite|outside|over|past|per|plus|regarding|round|save|since|than|through|to|toward|towards|under|underneath|unlike|until|up|upon|versus|via|with|within|without)\b/g; // Common prepositions
  const adjectiveRegex = /\b(?:big|small|tall|short|fast|slow|young|old|happy|sad|angry|calm|hot|cold|beautiful|ugly|good|bad|nice|mean|brave|fierce|foolish|smart|stupid|hungry|thirsty|tired|sleepy|energetic|lazy|shy|confident|proud|jealous|kind|cruel|friendly|unfriendly|honest|dishonest|helpful|useless|hopeful|hopeless|generous|selfish|polite|rude|brilliant|dull|exciting|boring|interesting|bored|excited|careful|careless|clever|stupid|innocent|guilty|lucky|unlucky|fortunate|unfortunate|successful|unsuccessful|lucky|unlucky|gentle|rough|smooth|soft|hard|tough|fragile|strong|weak|healthy|sick|wealthy|poor|rich|famous|unknown|popular|unpopular|quiet|loud|noisy|peaceful|violent|calm|stormy|bright|dark|light|heavy|deep|shallow|high|low|long|short|wide|narrow|empty|full|clean|dirty|pure|impure|fresh|stale)\b/g; // Common adjectives

  // Highlight nouns
  let outputText = inputText.replace(nounRegex, '<span class="noun">$&</span>');
  
  // Highlight verbs
  outputText = outputText.replace(verbRegex, '<span class="verb">$&</span>');

  // Highlight adverbs
  outputText = outputText.replace(adverbRegex, '<span class="adverb">$&</span>');

  // Highlight prepositions
  outputText = outputText.replace(prepositionRegex, '<span class="preposition">$&</span>');

  // Highlight adjectives
  outputText = outputText.replace(adjectiveRegex, '<span class="adjective">$&</span>');

  document.getElementById("output-text").innerHTML = outputText;
}
