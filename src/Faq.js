import React from 'react';
import ReactDOM from 'react-dom';
import './css/Faq.css';

class Faq extends React.Component {

	render() {
		return(
			<div id='FAQContainer'>
				<div id='FAQTitle'>FAQ- Foire aux questions</div>
				<div id='FAQSummary'>
					<a href='#faq_1'> <div className='aSummaryRow'>1-   Pourquoi mon profil n'est-il pas encore validé ?</div></a>
					<a href='#faq_2'> <div className='aSummaryRow'>2-   Mon profil vient d'être refusé, je ne comprends pas pourquoi ?</div></a>
					<a href='#faq_3'> <div className='aSummaryRow'>3-   Quelles photos devrais-je mettre sur mon profil ?</div></a>
					<a href='#faq_4'> <div className='aSummaryRow'>4-   Et si je refuse un match, va-t-on m'en proposer un autre ?</div></a>
					<a href='#faq_5'> <div className='aSummaryRow'>5-   Combien de temps met-on pour trouver un match ?</div></a>
					<a href='#faq_6'> <div className='aSummaryRow'>6-   J'ai fait ma demande de match il y a quelques semaines et je n'ai toujours pas de réponses, dois-je m'inquiéter ?</div></a>
					<a href='#faq_7'> <div className='aSummaryRow'>7-   Je n'arrive pas à accéder à la demande de match, que faire ?</div></a>
					<a href='#faq_8'> <div className='aSummaryRow'>8-   Où dois-je aller pour que l'on me pose des questions sur ma personalité, que faire ?</div></a>
					<a href='#faq_9'> <div className='aSummaryRow'>9-   Je me suis trompé(e) de réponse (ou j'ai changé d'avis), puis-je modifier ma réponse ?</div></a>
					<a href='#faq_10'> <div className='aSummaryRow'>10- Pourquoi je ne vois aucun autre profil sur le site ?</div></a>
					<a href='#faq_11'> <div className='aSummaryRow'>11- Je viens d'accépter un match, comment ça se passe ensuite ?</div></a>
					<a href='#faq_12'> <div className='aSummaryRow'>12- Où est-ce que je peux résilier mon abonement ?</div></a>
					<a href='#faq_13'> <div className='aSummaryRow'>13- Quand est-ce qu'il faut que je me désabonne ?</div></a>
					<a href='#faq_14'> <div className='aSummaryRow'>14- Je n'ai trouvé personne pour faire un échange pendant cette année d'abonnement, comment fais-je pour profiter d'une nouvelle année d'abonnement gratuite ?</div></a>
				</div>
				<div id='answerContainer'>
					<h2 id='faq_1'>1-  Pourquoi mon profil n'est-il pas encore validé ?</h2>
					<p>Une équipe se charge de valider, 1 à 1 les profils. En vérifiant la conformité des profils. Cela peut prendre jusqu'à 48h.</p>
					<h2>Pourquoi ?</h2>
					<p>Pour GAOODI la sécurité est primordiale, c’est pourquoi nous demandons une pièce d’identité du jeune ainsi que d’un parent ou tuteur légal et une équipe de sécurité vérifie les identités ainsi qu’une recherche approfondie sur le parent pour être sûre de la fiabilité du profil. C’est pourquoi le profil peut mettre jusqu'à 48 heures avant d'être validé.</p>					
					<h2 id='faq_2'>2-  Mon profil vient d'être refusé, je ne comprends pas pourquoi ?</h2>
					<p>Cela peut être dû à plusieurs raisons :</p>
					<p>- Votre profil a été jugé suspect par l'oganisme chargé de vérifier les profils. Nous ne donnerons pas suite à votre  inscription.</p>
					<p>- Le parent qui a fourni sa pièce d’identité doit figurer sur au moins une photo que vous avez fournie sur votre profil. Il doit être identifiable.</p>
					<h2 id='faq_3'>3-  Quelles photos devrais-je mettre sur mon profil ?</h2>
					<p>Pour donner envie à votre match probable et à sa famille il est fortement conseillé d’insérer de jolie photo de famille.</p>
					<p>Ex :</p>
					<div className="divImg">
					<img src="/img/720/FAQ_Q3.jpg"/>
					</div>
					<h2 id='faq_4'>4-  Et si je refuse un match, va-t-on m'en proposer un autre ?</h2>
					<p>Oui, si vous n'acceptez un match pour quelque raison que ce soit, nous vous en trouverons un autre.</p>
					<h2 id='faq_5'>5-  Combien de temps met-on pour trouver un match ?</h2>
					<p>Tout dépend de la demande, du nombre d’inscrit.</p>
					<h2 id='faq_6'>6-  J'ai fait ma demande de match il y a quelques semaines et je n'ai toujours pas de réponses, dois-je m'inquiéter ?</h2>
					<p>Non, pas besoin de s’inquiéter. Le site vient d’ouvrir ses portes, nous devons attendre le bon match avant de vous le proposer.</p>
					<h2 id='faq_7'>7-  Je n'arrive pas à accéder à la demande de match, que faire ?</h2>
					<p>SI vous n’arrivez pas à accéder à la recherche de match, il se peut que votre profil n’a pas encore été validé ou que vous n’ayez pas répondu à au moins 70% des questions.</p>
					<h2 id='faq_8'>8-  Où dois-je aller pour que l'on me pose des questions sur ma personalité, que faire ?</h2>
					<p>Pas besoin d’aller bien loin, rendez-vous sur votre profil (même si celui-ci n’a pas encore été validé) et cliquez sur cette icone : <img className='smallImg' src='/img/120/question.png'/></p>
					<h2 id='faq_9'>9-  Je me suis trompé(e) de réponse (ou j'ai changé d'avis), puis-je modifier ma réponse ?</h2>
					<p>Seules les questions munies de ce symbole <img className='smallImg' src='/img/240/modif_quest_240.png'/> sont modifiables à tout moment dans l’espace question, cliquez sur ce même symbole <img className='smallImg' src='/img/120/question.png'/> en haut à droite.</p>
					<p>Les autres questions ne sont pas modifiables.</p>
					<h2 id='faq_10'>10- Pourquoi je ne vois aucun autre profil sur le site ?</h2>
					<p>Tout simplement parce qu’avec GAOODI nous fonctionnons par un système de match. Seuls les profils qui vous sont proposés sont visibles à vos yeux.</p>
					<h2 id='faq_11'>11- Je viens d'accépter un match, comment ça se passe ensuite ?</h2>
					<p>Tout simplement en prenant contact via notre chat et ainsi faire connaissance et décider ensemble pour faire un échange. Libre à vous de faire comme vous le souhaitez !</p>
					<h2 id='faq_12'>12- Où est-ce que je peux résilier mon abonement ?</h2>
					<div className="noMargin">
						<p>Allez dans « mes infos » puis « mon abonnement » et cliquez sur « Résilier ». </p>
						<p>Vous avez deux options:</p>
						<p className="regPadLef italBold">Résilier -- Profil inactif</p>
						<p>Cela veut dire qu’en vous désabonnant votre profil ne sera pas supprimé de notre base de donnée, ni vos informations. Cependant votre profil ne sera plus actif, vous ne pourrez plus faire de demande de match ou communiquer avec vos amis du monde. Vous pourrez réactiver votre abonnement à tout moment.</p>
						<p className="regPadLef italBold">Résilier -- Profil supprimé</p>
						<p>Cela veut dire, qu’en vous désabonnant  votre profil sera définitivement supprimé de notre base de donnée, ainsi que toute vos informations. Votre profil n’existera plus et si vous voulez vous réabonner il faudra repartir de zéro. </p>
						<h2 id='faq_13'>13- Quand est-ce qu'il faut que je me désabonne ?</h2>
						<p>Quand vous le voulez ! Vous avez déjà payé pour une année entière à partir de la date de votre achat. En vous désabonnant, vous ne serez pas débité pour l’année d’après (par rapport à votre date d’achat).</p>
					</div>
					<h2 id='faq_14'>14- Je n'ai trouvé personne pour faire un échange pendant cette année d'abonnement, comment fais-je pour profiter d'une nouvelle année d'abonnement gratuite ?</h2>
					<div>
						<p>Pas de souci, vous êtes au bon endroit, il suffit de nous contacter par mail dans la rubrique « nous contacter » et de nous envoyer cette demande.</p>
						<p>Cliquez sur le raccourci de votre profil, puis tout en bas «nous contacter».</p>
						<p>Pour qu’elle soit acceptée;</p>
						<p className="regPadLef">- Vous n’avez acceptez aucune demande de match.</p>
						<p className="regPadLef">- La demande de match n’a pas abouti, c’est-à-dire que vous avez été en contact avec cette personne pendant un mois ou moins.</p>
					</div>
				</div>
			</div>
		);
	}

}

export default Faq;